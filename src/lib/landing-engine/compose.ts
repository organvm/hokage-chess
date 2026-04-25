/**
 * Compose a Hokage landing page from a Persona × Narrative.
 *
 * Pure function. Returns ordered SectionData[] consumed by the dynamic
 * route at src/app/for/[persona]/page.tsx.
 */

import type { Persona, PersonaId } from "./personas";
import { getPersona } from "./personas";
import type { Narrative, NarrativeId } from "./narratives";
import { getNarrative } from "./narratives";
import type { SectionData } from "./sections";
import { SectionBuilders } from "./sections";

export interface ComposedLanding {
  persona: Persona;
  narrative: Narrative;
  sections: SectionData[];
}

export function composeLanding(opts: {
  personaId: PersonaId;
  narrativeId?: NarrativeId;
}): ComposedLanding {
  const persona = getPersona(opts.personaId);
  const narrative = getNarrative(opts.narrativeId ?? "ki-sho-ten-ketsu");
  const sections = narrative.sequence.map((key) => SectionBuilders[key](persona));
  return { persona, narrative, sections };
}
