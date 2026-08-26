import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "../lib/router";
import { LineReveal, Reveal, useClock, useInView, usePrefersReducedMotion } from "../lib/motion";
import { heroStats, profile } from "../content/site";
import { Barcode, IconArrowRight, IconDownload } from "./Icons";

/* Animated count-up that respects prefers-reduced-motion. */
function CountUp({ value }: { value: string }) {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(() => (reduced ? value : "0"));

  useEffect(() => {
    const match = value.match(/^([^\d]*)(\d+)(.*)$/);
    if (!match || reduced) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const [, prefix, numStr, suffix] = match;
    const target = parseInt(numStr, 10);
    const duration = 1300;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  return (
    <span ref={ref} className="tabular">
      {display}
    </span>
  );
}

const headlineLines: { text: string; accent?: boolean }[] = [
  { text: "Architecting Digital" },
  { text: "Transformation &" },
  { text: "E-Commerce Growth.", accent: true },
];

const capabilityMix = [
  { label: "E-Commerce & Growth", level: 92 },
  { label: "MarTech & CRM", level: 90 },
  { label: "Web Platforms & CMS", level: 88 },
  { label: "Data & Analytics", level: 85 },
];

export function Hero() {
  const clock = useClock();
  const [cardRef, cardIn] = useInView<HTMLDivElement>(0.25);

  return (
    <section className="relative overflow-hidden pt-36 sm:pt-40" aria-label="Introduction">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-start gap-12 pb-14 lg:grid-cols-12 lg:gap-10">
          {/* left — statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-gold" aria-hidden />
                Senior leadership · E-Commerce · MarTech · Digital Transformation
              </p>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(2.4rem,5.6vw,4.3rem)] font-bold leading-[1.04] tracking-tight">
              {headlineLines.map((line, i) => (
                <LineReveal key={line.text} delay={i * 130}>
                  <span className={line.accent ? "text-acc" : undefined}>{line.text}</span>
                </LineReveal>
              ))}
            </h1>

            <Reveal delay={220}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-soft">
                I bridge the gap between <em className="font-semibold not-italic text-ink">technical web management</em>,{" "}
                <em className="font-semibold not-italic text-ink">enterprise MarTech migrations</em>, and{" "}
                <em className="font-semibold not-italic text-ink">e-commerce revenue</em> — turning disconnected
                systems into unified growth engines.
              </p>
            </Reveal>

            <Reveal delay={330}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/case-studies"
                  className="group inline-flex items-center gap-3 bg-acc px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-acc/25"
                >
                  View case studies
                  <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={profile.resumeHref}
                  download
                  className="group inline-flex items-center gap-3 border border-strong px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-soft transition-all duration-300 hover:border-acc hover:text-acc"
                >
                  <IconDownload className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download résumé
                </a>
              </div>
            </Reveal>

            {/* stats strip */}
            <Reveal delay={430}>
              <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-line pt-7 sm:grid-cols-4">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl font-bold tracking-tight text-ink">
                      <CountUp value={s.value} />
                    </dd>
                    <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* right — leadership snapshot */}
          <div className="lg:col-span-5">
            <Reveal delay={260}>
              <div ref={cardRef} className={`card-shadow relative border border-line bg-surface ${cardIn ? "is-in" : ""}`}>
                <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-gold" />

                <div className="flex items-center justify-between border-b border-line px-5 py-4">
                  <span className="font-display text-sm font-semibold tracking-tight">Leadership snapshot</span>
                  <span className="flex items-center gap-2 border border-line bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-acc">
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acc pulse-ring" />
                    Available
                  </span>
                </div>

                <dl className="divide-y divide-line">
                  {[
                    ["Current focus", "MarTech consolidation & AI workflows"],
                    ["Operating model", "Systems over heroics"],
                    ["Base", profile.location],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">{label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">{value}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Local time</dt>
                    <dd className="tabular font-mono text-sm text-ink">{clock}</dd>
                  </div>
                </dl>

                <div className="border-t border-line px-5 py-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Capability mix</p>
                  <ul className="mt-4 space-y-3.5">
                    {capabilityMix.map((c, i) => (
                      <li key={c.label}>
                        <div className="mb-1.5 flex items-baseline justify-between">
                          <span className="text-xs font-medium text-soft">{c.label}</span>
                          <span className="tabular font-mono text-[10px] text-mute">{c.level}%</span>
                        </div>
                        <div className="h-1 w-full bg-raise">
                          <div
                            className={`bar h-full ${i === 0 ? "bg-gold" : "bg-acc"}`}
                            style={{ "--w": `${c.level}%`, transitionDelay: `${i * 110}ms` } as CSSProperties}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t border-line px-5 py-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">Est. 2009 · JW</span>
                  <Barcode className="h-5 w-28 text-strong" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* scroll cue */}
        <div className="flex items-center gap-3 pb-10" aria-hidden>
          <span className="inline-block h-px w-14 bg-strong" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">Selected work below</span>
        </div>
      </div>
    </section>
  );
}
