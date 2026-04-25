import type { CtaSectionProps } from "@/lib/landing-engine/sections";

export function CtaSection({ data }: { data: CtaSectionProps }) {
  return (
    <section
      id="cta"
      className="relative px-6 py-32 max-w-[760px] mx-auto text-center"
    >
      <h2 className="font-heading text-[clamp(32px,4vw,52px)] font-bold uppercase text-white leading-tight">
        {data.heading}
      </h2>
      <p className="mt-6 text-[17px] font-light leading-relaxed text-white/60">
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
