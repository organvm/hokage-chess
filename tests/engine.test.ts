import { describe, it, expect, vi } from "vitest";
import * as engine from "../src/lib/engine";
import { VERSION, main } from "../src/lib/engine";

describe("engine VERSION", () => {
  it("exports a semver-shaped version string", () => {
    expect(VERSION).toBeTruthy();
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+$/);
  });
});

describe("engine main()", () => {
  it("logs the version banner and returns void", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const result = main();
    expect(result).toBeUndefined();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(`hokage-chess v${VERSION}`);
    spy.mockRestore();
  });
});

describe("engine barrel re-exports", () => {
  it("re-exports content-strategy surface", () => {
    expect(typeof engine.scoreTitleFormula).toBe("function");
    expect(typeof engine.scoreThumbnail).toBe("function");
    expect(engine.DEFAULT_LEXICON).toBeTruthy();
    expect(engine.SHORT_FORMAT).toBe("short");
  });

  it("re-exports analytics surface", () => {
    expect(typeof engine.calculateCTR).toBe("function");
    expect(typeof engine.assessCTR).toBe("function");
    expect(typeof engine.generateWeeklyScorecard).toBe("function");
  });

  it("re-exports growth surface", () => {
    expect(typeof engine.determinePhase).toBe("function");
    expect(typeof engine.projectAnnualRevenue).toBe("function");
    expect(Array.isArray(engine.QUARTERLY_TARGETS)).toBe(true);
  });

  it("re-exports narrative surface", () => {
    expect(typeof engine.createNarrative).toBe("function");
    expect(typeof engine.validateNarrative).toBe("function");
    expect(engine.ACT_GUIDELINES).toBeTruthy();
  });
});
