/**
 * Narrative templates. Mirrors the spiral-repo design, anchored on the
 * existing src/lib/narrative.ts (ki-sho-ten-ketsu four-act framework).
 */

import type { SectionBuilderKey } from "./sections";

export type NarrativeId = "ki-sho-ten-ketsu";

export interface Narrative {
  id: NarrativeId;
  label: string;
  intent: string;
  sequence: SectionBuilderKey[];
}

export const NARRATIVES: Record<NarrativeId, Narrative> = {
  "ki-sho-ten-ketsu": {
    id: "ki-sho-ten-ketsu",
    label: "Ki–Sho–Ten–Ketsu (introduce → develop → twist → resolve)",
    intent:
      "Default narrative for persona-targeted pages. Opens with the persona's hero, names the shape of their stuckness, twists into three concrete paths in (one per chess pillar), resolves with a single decisive CTA.",
    sequence: ["hero", "problem", "threePaths", "cta"],
  },
};

export function getNarrative(id: NarrativeId): Narrative {
  const n = NARRATIVES[id];
  if (!n) throw new Error(`unknown narrative: ${id}`);
  return n;
}
