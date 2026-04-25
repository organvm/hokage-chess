import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { listPersonas, type PersonaId } from "@/lib/landing-engine/personas";
import { composeLanding } from "@/lib/landing-engine/compose";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ThreePathsSection } from "@/components/landing/ThreePathsSection";
import { CtaSection } from "@/components/landing/CtaSection";

export function generateStaticParams() {
  return listPersonas().map((p) => ({ persona: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ persona: string }>;
}): Promise<Metadata> {
  const { persona: personaId } = await params;
  try {
    const composed = composeLanding({ personaId: personaId as PersonaId });
    return {
      title: `Hokage Chess — ${composed.persona.label}`,
      description: composed.persona.heroHook,
      openGraph: {
        title: `Hokage Chess — ${composed.persona.label}`,
        description: composed.persona.heroHook,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `Hokage Chess — ${composed.persona.label}`,
        description: composed.persona.heroHook,
      },
    };
  } catch {
    return { title: "Hokage Chess" };
  }
}

export default async function PersonaPage({
  params,
}: {
  params: Promise<{ persona: string }>;
}) {
  const { persona: personaId } = await params;
  let composed;
  try {
    composed = composeLanding({ personaId: personaId as PersonaId });
  } catch {
    notFound();
  }
  return (
    <main>
      {composed.sections.map((section, i) => {
        if (section.type === "hero") return <HeroSection key={i} data={section} />;
        if (section.type === "problem") return <ProblemSection key={i} data={section} />;
        if (section.type === "three-paths")
          return <ThreePathsSection key={i} data={section} />;
        if (section.type === "cta") return <CtaSection key={i} data={section} />;
        return null;
      })}
    </main>
  );
}
