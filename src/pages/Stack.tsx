import type { CSSProperties } from "react";
import { TechStackMatrix } from "../components/TechStackMatrix";
import { SectionHead } from "../components/SectionHead";
import { Reveal, useInView } from "../lib/motion";
import { proficiencies } from "../content/site";

const philosophy = [
  {
    index: "01",
    title: "Boring technology wins",
    body: "Choose the tool the team can run at 2 a.m., not the one that demos best. Durability beats novelty every quarter.",
  },
  {
    index: "02",
    title: "Integration is the product",
    body: "The stack's value lives in the seams — APIs, webhooks, and shared schemas. A connected B-list beats a siloed A-list.",
  },
  {
    index: "03",
    title: "Measure what moves revenue",
    body: "Every tool earns its seat by moving a number the P&L cares about. If we can't draw that line, we re-shop the seat.",
  },
];

export function Stack() {
  const [barsRef, barsIn] = useInView<HTMLDivElement>(0.2);

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:pt-40">
      <SectionHead
        index="03"
        eyebrow="Tech stack"
        title="The operating toolkit."
        note="Four quadrants covering the full journey: platform → commerce → data → delivery. Calibration below is self-assessed and field-verified."
      />

      <Reveal>
        <TechStackMatrix />
      </Reveal>

      {/* calibration bars */}
      <div className="mt-24">
        <SectionHead
          index="03.A"
          eyebrow="Calibration"
          title="Depth, honestly measured."
          note="Percentiles reflect production mileage — migrations led, programs run, teams taught."
        />
        <div ref={barsRef} className={`grid gap-x-12 gap-y-7 md:grid-cols-2 ${barsIn ? "is-in" : ""}`}>
          {proficiencies.map((p, i) => (
            <div key={p.name} className="group">
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <span className="font-mono text-sm text-soft transition-colors duration-300 group-hover:text-acc">
                  {p.name}
                </span>
                <span className="flex items-baseline gap-3">
                  <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-mute sm:inline">{p.group}</span>
                  <span className="tabular font-display text-sm font-bold text-ink">{p.level}%</span>
                </span>
              </div>
              <div className="h-1.5 w-full border border-line bg-surface">
                <div
                  className="bar h-full bg-acc"
                  style={{ "--w": `${p.level}%`, transitionDelay: `${i * 90}ms` } as CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* philosophy */}
      <div className="mt-24">
        <SectionHead
          index="03.B"
          eyebrow="Tooling philosophy"
          title="Three rules the stack obeys."
        />
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {philosophy.map((ph, i) => (
            <div key={ph.index} className="group bg-surface p-7 transition-colors duration-300 hover:bg-raise">
              <Reveal delay={i * 100}>
                <p className="tabular font-display text-3xl font-bold text-strong transition-colors duration-300 group-hover:text-acc">
                  {ph.index}
                </p>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{ph.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{ph.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
