/**
 * Bot policy — which crawlers are allowed and why.
 *
 * Source of truth for robots.ts. Changes here must match
 * `data/ai-training-bot-policy-decision.md` in the parent repo.
 *
 * Portfolio default: allow search + AI-citation bots, block AI-training bots.
 * Override per-site only with a documented reason.
 */

export type BotClass = "search" | "ai-citation" | "ai-training";

export interface BotRule {
  userAgent: string;
  class: BotClass;
  allow: boolean;
  note?: string;
}

export const botRules: BotRule[] = [
  // Search crawlers — always allow
  { userAgent: "Googlebot", class: "search", allow: true },
  { userAgent: "Bingbot", class: "search", allow: true },
  { userAgent: "DuckDuckBot", class: "search", allow: true },
  { userAgent: "Yandex", class: "search", allow: true },

  // AI citation bots — always allow (they cite source URLs)
  { userAgent: "PerplexityBot", class: "ai-citation", allow: true },
  { userAgent: "OAI-SearchBot", class: "ai-citation", allow: true },
  { userAgent: "ChatGPT-User", class: "ai-citation", allow: true },
  { userAgent: "Google-Extended", class: "ai-citation", allow: true, note: "Feeds Google AI Overviews which cite source URLs." },

  // AI training bots — blocked per portfolio default
  { userAgent: "GPTBot", class: "ai-training", allow: false },
  { userAgent: "CCBot", class: "ai-training", allow: false, note: "Common Crawl — feeds many training corpora." },
  { userAgent: "Applebot-Extended", class: "ai-training", allow: false },
  { userAgent: "Claude-Web", class: "ai-training", allow: false },
  { userAgent: "anthropic-ai", class: "ai-training", allow: false },
  { userAgent: "ClaudeBot", class: "ai-training", allow: false },
  { userAgent: "Amazonbot", class: "ai-training", allow: false },
  { userAgent: "FacebookBot", class: "ai-training", allow: false },
  { userAgent: "Meta-ExternalAgent", class: "ai-training", allow: false },
  { userAgent: "Bytespider", class: "ai-training", allow: false },
];

export const defaultDisallow = ["/api/", "/_next/"];
