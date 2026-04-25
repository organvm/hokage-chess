import type { ProblemSectionProps } from "@/lib/landing-engine/sections";

export function ProblemSection({ data }: { data: ProblemSectionProps }) {
  return (
    <section className="relative px-6 py-24 max-w-[860px] mx-auto">
      <h2 className="font-heading text-[clamp(28px,3.5vw,44px)] font-bold uppercase text-white leading-tight">
        {data.heading}
      </h2>
      <ul className="mt-10 space-y-6">
        {data.painPoints.map((point, i) => (
          <li key={i} className="flex gap-4">
            <span className="text-hokage-red font-mono shrink-0 select-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[17px] font-light leading-relaxed text-white/70">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
