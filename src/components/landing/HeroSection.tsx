import type { HeroSectionProps } from "@/lib/landing-engine/sections";

export function HeroSection({ data }: { data: HeroSectionProps }) {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-black overflow-hidden">
      <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-hokage-red mb-2">
        {data.pillarLabel}
      </p>
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/40 mb-8">
        {data.ratingBand}
      </p>
      <h1 className="font-heading text-[clamp(40px,6vw,76px)] font-bold leading-[1.05] tracking-tight text-white uppercase">
        {data.heading}
      </h1>
      <p className="mt-8 text-[17px] font-light leading-relaxed text-white/60 max-w-[640px]">
        {data.subhead}
      </p>
      <a
        href={data.ctaHref}
        className="mt-10 inline-flex items-center px-8 py-4 rounded-full bg-hokage-red text-white text-sm font-semibold uppercase tracking-wide hover:bg-red-600 transition-colors"
      >
        {data.ctaLabel}
      </a>
    </section>
  );
}
