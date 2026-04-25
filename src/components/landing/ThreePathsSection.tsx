import type { ThreePathsSectionProps } from "@/lib/landing-engine/sections";

export function ThreePathsSection({ data }: { data: ThreePathsSectionProps }) {
  return (
    <section className="relative px-6 py-24 max-w-[1080px] mx-auto">
      <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] font-bold uppercase text-white leading-tight text-center">
        {data.heading}
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {data.paths.map((path, i) => (
          <a
            key={i}
            href={path.href}
            className="group block p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-hokage-red/40 transition-colors"
          >
            <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-hokage-red mb-3">
              {path.label}
            </p>
            <p className="text-[15px] font-light leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
              {path.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
