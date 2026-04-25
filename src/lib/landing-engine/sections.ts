/**
 * Section type registry + builders — chess-domain instantiation of the
 * primitive shipped in the spiral repo. Same shape, different copy +
 * adjacency rules (chess pillars, not health pillars).
 */

import type { Persona } from "./personas";

export type SectionType = "hero" | "problem" | "three-paths" | "cta";

export interface HeroSectionProps {
  type: "hero";
  pillarLabel: string;
  ratingBand: string;
  heading: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ProblemSectionProps {
  type: "problem";
  heading: string;
  painPoints: string[];
}

export interface ThreePathsSectionProps {
  type: "three-paths";
  heading: string;
  paths: Array<{
    label: string;
    description: string;
    href: string;
  }>;
}

export interface CtaSectionProps {
  type: "cta";
  heading: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
}

export type SectionData =
  | HeroSectionProps
  | ProblemSectionProps
  | ThreePathsSectionProps
  | CtaSectionProps;

/**
 * Three-roads adjacency: which two pillars sit alongside each persona's
 * primary stat. Pulled from the v2 Character Sheet stat-coupling logic.
 */
const PILLAR_ADJACENCY: Record<string, [string, string, string]> = {
  tactics: ["tactics", "calculation", "strategy"],
  strategy: ["strategy", "endgame", "tilt-resistance"],
  calculation: ["calculation", "tactics", "endgame"],
  endgame: ["endgame", "calculation", "strategy"],
  "time-management": ["time-management", "tilt-resistance", "tactics"],
  "tilt-resistance": ["tilt-resistance", "time-management", "strategy"],
};

const PILLAR_DESCRIPTIONS: Record<string, string> = {
  tactics: "The Forge — pattern recognition until your eyes see threats before you can name them.",
  strategy: "The Library — long-term plans, pawn structures, when not to grab the material.",
  calculation: "The Lab — concrete lines deeper than your opponent will go.",
  endgame: "The Crucible — winning what should be won, drawing what should be drawn.",
  "time-management": "The Clock — playing your moves and your opponent's clock at the same time.",
  "tilt-resistance": "The Dojo — losing the game without losing the next one.",
};

export const SectionBuilders = {
  hero(persona: Persona): HeroSectionProps {
    return {
      type: "hero",
      pillarLabel: persona.primaryPillar.replace("-", " "),
      ratingBand: persona.ratingBand,
      heading: persona.label,
      subhead: persona.heroHook,
      ctaLabel: persona.ctaCommit,
      ctaHref: "#cta",
    };
  },
  problem(_persona: Persona): ProblemSectionProps {
    return {
      type: "problem",
      heading: "The grinding middle.",
      painPoints: _persona.pain,
    };
  },
  threePaths(persona: Persona): ThreePathsSectionProps {
    const adj = PILLAR_ADJACENCY[persona.primaryPillar] ?? [
      "tactics",
      "strategy",
      "endgame",
    ];
    return {
      type: "three-paths",
      heading: "Three roads in.",
      paths: adj.map((slug) => ({
        label: slug.replace("-", " "),
        description: PILLAR_DESCRIPTIONS[slug] ?? `Enter through ${slug}.`,
        href: `/pillars/${slug}`,
      })),
    };
  },
  cta(persona: Persona): CtaSectionProps {
    return {
      type: "cta",
      heading: persona.desire[0] ?? "Begin the climb.",
      subhead: persona.desire.slice(1).join(" ") || persona.heroHook,
      ctaLabel: persona.ctaCommit,
      ctaHref: "/#join",
    };
  },
} as const;

export type SectionBuilderKey = keyof typeof SectionBuilders;
