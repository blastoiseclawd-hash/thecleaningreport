/**
 * Publisher, editor, and reviewer identity.
 *
 * Single source of truth for Organization + Person schema and for the
 * named-editor byline in the Footer and About page. Installed during Phase 8.5
 * Block A1 (schema.tsx port) — A2 will run scaffold-authority-stack.js to
 * wire the byline into layout.tsx and add the /ai-disclosure route.
 *
 * Non-YMYL site — no credentialed reviewer required. Lee is the named
 * editor/publisher; desks remain as internal voice tooling only.
 */

import { siteConfig } from "@/config/site";

export type Credential = {
  credentialCategory: "license" | "certification" | "degree" | "membership";
  name: string;
  issuingBody: string;
  identifier?: string;
  url?: string;
};

export type Editor = {
  name: string;
  displayName: string;
  credentials: string[];
  sameAs: string[];
  hasCredential: Credential[];
  bio: string;
  visibleBio?: string;
  headshot: string;
  jobTitle: string;
};

export type Reviewer = {
  name: string;
  displayName: string;
  credentials: string[];
  credentialVerificationUrl: string;
  sameAs: string[];
  bio: string;
  headshot: string;
  reviewScope: string;
};

export type Publisher = {
  name: string;
  url: string;
  logo: string;
  foundingDate?: string;
  sameAs?: string[];
};

export const publisher: Publisher = {
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  foundingDate: "2026",
};

export const editor: Editor = {
  name: "Lee Serel, CPA",
  displayName: "Lee Serel",
  credentials: ["CPA"],
  sameAs: [
    "https://www.linkedin.com/in/lee-serel-05713629/",
    "https://eservices.nysed.gov/professions/verification-search",
  ],
  hasCredential: [
    {
      credentialCategory: "license",
      name: "Certified Public Accountant (New York)",
      issuingBody: "New York State Education Department, Office of the Professions",
      identifier: "116821",
      url: "https://eservices.nysed.gov/professions/verification-search",
    },
  ],
  bio:
    "Lee Serel is the publisher and editor of The Cleaning Report. A New York-licensed CPA, Lee brings an analytical, reader-first approach to home-cleaning gear coverage — insisting on cited owner-report patterns, manufacturer spec sheets, and verifiable community consensus over marketing copy. Editorial desks operate as internal voice frameworks; final editorial sign-off on every guide is Lee's.",
  visibleBio:
    "Lee founded The Cleaning Report after watching a household robot vacuum cost more than it saved — constant dock tantrums, hair-tangled brushes, an app that pushed notifications at 2am. The site exists to separate the cleaning tools that actually reduce daily friction from the ones that just move it around. Coverage starts with floor care and expands into broader indoor-cleaning gear. Every pick has to hold up to bin-empty cadence, filter replacement cost, pet-hair handling, and the repair-vs-replace patterns that show up in two-year owner reports.",
  headshot: "/images/authors/lee-serel.png",
  jobTitle: "Publisher & Editor",
};

export const reviewer: Reviewer | null = null;
