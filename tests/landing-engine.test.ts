import { describe, it, expect } from "vitest";
import {
  PERSONAS,
  listPersonas,
  getPersona,
  type PersonaId,
} from "../src/lib/landing-engine/personas";
import {
  NARRATIVES,
  getNarrative,
} from "../src/lib/landing-engine/narratives";
import { SectionBuilders } from "../src/lib/landing-engine/sections";
import { composeLanding } from "../src/lib/landing-engine/compose";

const ALL_PERSONA_IDS: PersonaId[] = [
  "stuck-beginner",
  "climbing-intermediate",
  "returning-adult-improver",
];

describe("PERSONAS registry", () => {
  it("contains all three seed personas", () => {
    expect(Object.keys(PERSONAS).sort()).toEqual([...ALL_PERSONA_IDS].sort());
  });

  it("each persona declares the full contract", () => {
    for (const id of ALL_PERSONA_IDS) {
      const p = PERSONAS[id];
      expect(p.id).toBe(id);
      expect(p.label).toBeTruthy();
      expect(p.ratingBand).toBeTruthy();
      expect(p.primaryPillar).toBeTruthy();
      expect(p.heroHook).toBeTruthy();
      expect(p.ctaCommit).toBeTruthy();
      expect(Array.isArray(p.pain)).toBe(true);
      expect(p.pain.length).toBeGreaterThanOrEqual(3);
      expect(Array.isArray(p.desire)).toBe(true);
      expect(p.desire.length).toBeGreaterThanOrEqual(3);
    }
  });
});

describe("listPersonas", () => {
  it("returns one entry per registered persona", () => {
    expect(listPersonas()).toHaveLength(ALL_PERSONA_IDS.length);
  });
});

describe("getPersona", () => {
  it("returns the matching persona for a known id", () => {
    expect(getPersona("stuck-beginner").id).toBe("stuck-beginner");
  });

  it("throws on an unknown id", () => {
    expect(() => getPersona("ghost" as PersonaId)).toThrow(/unknown persona/);
  });
});

describe("NARRATIVES registry", () => {
  it("contains the ki-sho-ten-ketsu narrative", () => {
    expect(NARRATIVES["ki-sho-ten-ketsu"]).toBeTruthy();
  });

  it("ki-sho-ten-ketsu has a 4-section sequence in canonical order", () => {
    const n = NARRATIVES["ki-sho-ten-ketsu"];
    expect(n.sequence).toEqual(["hero", "problem", "threePaths", "cta"]);
  });
});

describe("getNarrative", () => {
  it("returns the narrative for a known id", () => {
    expect(getNarrative("ki-sho-ten-ketsu").id).toBe("ki-sho-ten-ketsu");
  });

  it("throws on an unknown id", () => {
    // @ts-expect-error — testing runtime guard with an invalid id
    expect(() => getNarrative("nonexistent")).toThrow(/unknown narrative/);
  });
});

describe("SectionBuilders.hero", () => {
  it("returns a hero section with persona-derived fields", () => {
    const persona = getPersona("stuck-beginner");
    const hero = SectionBuilders.hero(persona);
    expect(hero.type).toBe("hero");
    expect(hero.heading).toBe(persona.label);
    expect(hero.subhead).toBe(persona.heroHook);
    expect(hero.ratingBand).toBe(persona.ratingBand);
    expect(hero.ctaLabel).toBe(persona.ctaCommit);
    expect(hero.pillarLabel).toBeTruthy();
    expect(hero.ctaHref).toBeTruthy();
  });
});

describe("SectionBuilders.problem", () => {
  it("returns a problem section carrying the persona's pain points", () => {
    const persona = getPersona("climbing-intermediate");
    const problem = SectionBuilders.problem(persona);
    expect(problem.type).toBe("problem");
    expect(problem.heading).toBeTruthy();
    expect(problem.painPoints).toEqual(persona.pain);
  });
});

describe("SectionBuilders.threePaths", () => {
  it("returns exactly three paths for any persona", () => {
    for (const id of ALL_PERSONA_IDS) {
      const paths = SectionBuilders.threePaths(getPersona(id));
      expect(paths.type).toBe("three-paths");
      expect(paths.paths).toHaveLength(3);
      for (const path of paths.paths) {
        expect(path.label).toBeTruthy();
        expect(path.description).toBeTruthy();
        expect(path.href).toBeTruthy();
      }
    }
  });

  it("places the persona's primary pillar first in the adjacency", () => {
    const persona = getPersona("stuck-beginner");
    const paths = SectionBuilders.threePaths(persona);
    expect(paths.paths[0].label.replace(" ", "-")).toBe(persona.primaryPillar);
  });
});

describe("SectionBuilders.cta", () => {
  it("returns a CTA section keyed off persona desire+commit", () => {
    const persona = getPersona("returning-adult-improver");
    const cta = SectionBuilders.cta(persona);
    expect(cta.type).toBe("cta");
    expect(cta.ctaLabel).toBe(persona.ctaCommit);
    expect(cta.heading).toBeTruthy();
    expect(cta.subhead).toBeTruthy();
    expect(cta.ctaHref).toBeTruthy();
  });
});

describe("composeLanding", () => {
  it("composes a 4-section landing for each registered persona under the default narrative", () => {
    for (const id of ALL_PERSONA_IDS) {
      const composed = composeLanding({ personaId: id });
      expect(composed.persona.id).toBe(id);
      expect(composed.narrative.id).toBe("ki-sho-ten-ketsu");
      expect(composed.sections).toHaveLength(4);
      expect(composed.sections.map((s) => s.type)).toEqual([
        "hero",
        "problem",
        "three-paths",
        "cta",
      ]);
    }
  });

  it("uses ki-sho-ten-ketsu when narrativeId is omitted", () => {
    const composed = composeLanding({ personaId: "stuck-beginner" });
    expect(composed.narrative.id).toBe("ki-sho-ten-ketsu");
  });

  it("propagates an explicit narrativeId", () => {
    const composed = composeLanding({
      personaId: "climbing-intermediate",
      narrativeId: "ki-sho-ten-ketsu",
    });
    expect(composed.narrative.id).toBe("ki-sho-ten-ketsu");
  });

  it("throws when personaId is unknown", () => {
    expect(() =>
      composeLanding({ personaId: "ghost" as PersonaId }),
    ).toThrow(/unknown persona/);
  });
});
