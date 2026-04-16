export interface PageTarget {
  slug: string;
  title: string;
  type: "hub" | "spoke" | "review" | "guide" | "trust";
  primaryKeyword: string;
  primaryVolume: number;
  primaryKd: number;
  secondaryKeywords: string[];
  authorSlug: string; // Legacy-compatible field name for the owning editorial desk.
  audienceProfile: string;
  priority: number;
  notes: string;
}

export const pageTargets: PageTarget[] = [];

export const keywordMapStats = {
  totalPages: pageTargets.length,
  hubPages: pageTargets.filter((page) => page.type === "hub").length,
  spokePages: pageTargets.filter((page) => page.type === "spoke").length,
  guidePages: pageTargets.filter((page) => page.type === "guide").length,
  trustPages: pageTargets.filter((page) => page.type === "trust").length,
  totalPrimaryVolume: pageTargets.reduce((sum, page) => sum + page.primaryVolume, 0),
  priority1Pages: pageTargets.filter((page) => page.priority === 1).length,
  byDesk: {
    everyday: pageTargets.filter((page) => page.authorSlug === "everyday-desk").length,
    enthusiast: pageTargets.filter((page) => page.authorSlug === "enthusiast-desk").length,
    lab: pageTargets.filter((page) => page.authorSlug === "lab-desk").length,
  },
};
