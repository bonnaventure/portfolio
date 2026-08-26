import { Link } from "../lib/router";
import { Reveal, useClock, useScramble } from "../lib/motion";
import { heroStats, profile } from "../content/site";
import { Barcode, IconArrowRight, IconDownload } from "./Icons";

const HEADLINE = "Architecting Digital Transformation & E-Commerce Growth.";

export function Hero() {
  const decoded = useScramble(HEADLINE, 350);
  const clock = useClock();

  return (
    <section className="relative overflow-hidden pt-36 sm:pt-40" aria-label="Introduction">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-start gap-12 pb-16 lg:grid-cols-12 lg:gap-8">
          {/* left — statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="inline-block h-px w-8 bg-acc" aria-hidden />
                Senior E-Commerce · MarTech · Digital Transformation
              </p>
            </Reveal>

            <h1 className="relative mt-6 font-display text-[clamp(2.35rem,5.4vw,4.15rem)] font-bold leading-[1.05] tracking-tight">
              {/* invisible sizer keeps layout stable while the decode runs */}
              <span className="invisible">{HEADLINE}</span>
              <span className="absolute inset-0" aria-hidden>
                {decoded}
                <span className="caret ml-1 inline-block h-[0.85em] w-[0.45em] translate-y-[0.12em] bg-acc" />
              </span>
              <span className="sr-only">{HEADLINE}</span>
            </h1>

            <Reveal delay={150}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-soft">
                I bridge the gap between <em className="font-semibold not-italic text-ink">technical web management</em>,{" "}
                <em className="font-semibold not-italic text-ink">enterprise MarTech migrations</em>, and{" "}
                <em className="font-semibold not-italic text-ink">e-commerce revenue</em> — turning disconnected
                systems into unified growth engines.
              </p>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/case-studies"
                  className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-acc"
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

            <Reveal delay={400}>
              <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-mute">
                15+ yrs <span className="text-acc">//</span> 3 enterprise migrations{" "}
                <span className="text-acc">//</span> est. 2009
              </p>
            </Reveal>
          </div>

          {/* right — system status panel */}
          <div className="lg:col-span-5">
            <Reveal delay={220}>
              <div className="relative border border-line bg-surface">
                {/* corner crosshairs */}
                {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map((pos) => (
                  <span key={pos} aria-hidden className={`absolute ${pos} font-mono text-xs leading-none text-strong`}>
                    +
                  </span>
                ))}

                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">sys.status</span>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-acc">
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acc pulse-ring" />
                    Operational
                  </span>
                </div>

                <dl className="divide-y divide-line">
                  {[
                    ["Local time", <span key="t" className="tabular font-mono text-sm text-ink">{clock}</span>],
                    ["Current focus", <span key="f" className="text-sm text-ink">MarTech consolidation & AI workflows</span>],
                    ["Availability", <span key="a" className="text-sm text-ink">{profile.availability}</span>],
                    ["Base", <span key="l" className="text-sm text-ink">{profile.location}</span>],
                  ].map(([label, value]) => (
                    <div key={label as string} className="flex items-center justify-between gap-4 px-5 py-3">
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="grid grid-cols-2 gap-px border-t border-line bg-line">
                  {heroStats.map((s) => (
                    <div key={s.label} className="bg-surface px-5 py-4 transition-colors duration-300 hover:bg-raise">
                      <p className="tabular font-display text-2xl font-bold tracking-tight text-ink">
                        {s.value}
                      </p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mute">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-line px-5 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">ID · JW-2026</span>
                  <Barcode className="h-5 w-28 text-strong" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* scroll cue */}
        <div className="flex items-center gap-3 pb-10" aria-hidden>
          <span className="inline-block h-px w-14 bg-strong" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-mute">Scroll — the receipts are below</span>
        </div>
      </div>
    </section>
  );
}
