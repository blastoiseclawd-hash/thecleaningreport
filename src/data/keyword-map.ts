export type PageTargetType = "hub" | "spoke" | "review" | "guide" | "trust";

export type PageTarget = {
  slug: string;
  type: PageTargetType;
  title: string;
  primaryKeyword: string;
  keyword?: string;
};

export const pageTargets: PageTarget[] = [];
