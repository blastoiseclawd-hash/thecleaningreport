import fs from "node:fs";
import path from "node:path";

import { pageTargets } from "@/data/keyword-map";
import { siteConfig } from "@/config/site";

type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

export interface PublicRouteEntry {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

const TRUST_ROUTES = new Set(["/about", "/disclosure", "/how-we-review", "/privacy", "/terms"]);

function collectRoutesFromApp(appDir: string): string[] {
  const routes = new Set<string>();

  function visit(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    if (entries.some((entry) => entry.isFile() && entry.name === "page.tsx")) {
      const relativeDir = path.relative(appDir, currentDir);
      const routeSegments = relativeDir
        .split(path.sep)
        .filter(Boolean)
        .filter((segment) => !segment.startsWith("("))
        .filter((segment) => !segment.startsWith("["))
        .filter((segment) => segment !== "api");

      routes.add(routeSegments.length === 0 ? "/" : `/${routeSegments.join("/")}`);
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }
      if (entry.name === "api" || entry.name.startsWith("(")) {
        continue;
      }
      visit(path.join(currentDir, entry.name));
    }
  }

  visit(appDir);
  return [...routes].sort((a, b) => a.localeCompare(b));
}

function routeMetadata(routePath: string): Pick<PublicRouteEntry, "changeFrequency" | "priority"> {
  if (routePath === "/") {
    return { changeFrequency: "weekly", priority: 1 };
  }

  if (TRUST_ROUTES.has(routePath)) {
    return { changeFrequency: "monthly", priority: 0.5 };
  }

  const slug = routePath.slice(1);
  const target = pageTargets.find((entry) => entry.slug === slug);

  switch (target?.type) {
    case "hub":
      return { changeFrequency: "weekly", priority: 0.9 };
    case "spoke":
    case "review":
      return { changeFrequency: "weekly", priority: 0.8 };
    case "guide":
      return { changeFrequency: "monthly", priority: 0.7 };
    case "trust":
      return { changeFrequency: "monthly", priority: 0.5 };
    default:
      return { changeFrequency: "weekly", priority: 0.7 };
  }
}

export function getPublicPageRoutes(): PublicRouteEntry[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes = collectRoutesFromApp(appDir);

  return routes.map((routePath) => ({
    path: routePath,
    ...routeMetadata(routePath),
  }));
}

export function buildPublicSitemapEntries(lastModified = new Date().toISOString()) {
  return getPublicPageRoutes().map((entry) => ({
    url: entry.path === "/" ? siteConfig.url : `${siteConfig.url}${entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
