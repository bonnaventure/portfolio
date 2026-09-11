import { useEffect, useState } from "react";
import { Link } from "../lib/router";
import { LineReveal, Reveal, useInView, usePrefersReducedMotion } from "../lib/motion";
import { heroStats, profile } from "../content/site";
import { IconArrowRight, IconDownload } from "./Icons";

/* Quiet count-up that respects prefers-reduced-motion. */
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
    const duration = 1100;
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

export function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32" aria-label="Introduction">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl pb-12 sm:pb-16">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-gold" aria-hidden />
              Senior leadership · E-Commerce · MarTech · Digital Transformation
            </p>
          </Reveal>

          <h1 className="mt-6 font-display text-[clamp(2.5rem,5.8vw,4.4rem)] font-bold leading-[1.05] tracking-tight">
            {headlineLines.map((line, i) => (
              <LineReveal key={line.text} delay={i * 130}>
                <span className={line.accent ? "text-acc" : undefined}>{line.text}</span>
              </LineReveal>
            ))}
          </h1>

          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soft">
              I bridge the gap between <strong className="font-semibold text-ink">technical web management</strong>,{" "}
              <strong className="font-semibold text-ink">enterprise MarTech migrations</strong>, and{" "}
              <strong className="font-semibold text-ink">e-commerce revenue</strong> — turning disconnected systems
              into unified growth engines.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-3 bg-acc px-6 py-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-acc/20"
              >
                View case studies
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={profile.resumeHref}
                download
                className="group inline-flex items-center gap-3 border border-strong px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-soft transition-all duration-300 hover:border-acc hover:text-acc"
              >
                <IconDownload className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download résumé
              </a>
            </div>
          </Reveal>
        </div>

        {/* engagement record */}
        <Reveal delay={420}>
          <dl className="grid grid-cols-2 gap-y-6 border-t border-line pb-12 pt-6 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold tracking-tight text-ink">
                  <CountUp value={s.value} />
                </dd>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
