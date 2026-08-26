import { Link } from "../lib/router";
import { getAdjacentCaseStudies, getCaseStudy, type CaseBlock } from "../content/caseStudies";
import { LineReveal, Reveal, useScrollProgress } from "../lib/motion";
import { IconArrowLeft, IconArrowNE, IconDiamond, IconQuote } from "../components/Icons";

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });

function Block({ index, title, block }: { index: string; title: string; block: CaseBlock }) {
  return (
    <Reveal>
      <section className="mt-14 border-t border-line pt-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-acc">
          {index} · {title}
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.7rem]">{block.lede}</h2>
        <div className="mt-5 space-y-4">
          {block.body.map((p) => (
            <p key={p.slice(0, 32)} className="max-w-2xl leading-relaxed text-soft">
              {p}
            </p>
          ))}
        </div>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {block.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 border border-line bg-surface px-4 py-3 text-sm leading-relaxed text-soft">
              <IconDiamond className="mt-0.5 h-3.5 w-3.5 shrink-0 text-acc" />
              {b}
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

export function CaseStudyDetail({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);
  const progress = useScrollProgress();

  if (!study) {
    return (
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-44 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-acc">404 · Not found</p>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight">No case study at this slug.</h1>
        <Link to="/case-studies" className="link-underline mt-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-acc">
          ← Back to the index
        </Link>
      </section>
    );
  }

  const { prev, next } = getAdjacentCaseStudies(slug);
  const meta: [string, string][] = [
    ["Client", study.client],
    ["Sector", study.sector],
    ["Role", study.role],
    ["Timeline", study.timeline],
    ["Published", fmtDate(study.published)],
  ];

  return (
    <>
      {/* reading progress */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-acc"
        style={{ transform: `scaleX(${progress})` }}
      />

      <article className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:pt-36">
        {/* breadcrumb */}
        <Reveal>
          <nav className="flex flex-wrap items-center justify-between gap-4" aria-label="Breadcrumb">
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-soft transition-colors hover:text-acc"
            >
              <IconArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              Index
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
              Case studies / <span className="text-acc">{study.client}</span>
            </p>
          </nav>
        </Reveal>

        {/* title */}
        <header className="mt-10 max-w-4xl">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-acc px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-acc">
                {study.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">{fmtDate(study.published)}</span>
            </div>
          </Reveal>
          <h1 className="mt-5 font-display text-[clamp(1.9rem,4.4vw,3.3rem)] font-bold leading-[1.07] tracking-tight">
            <LineReveal>{study.title}</LineReveal>
          </h1>
          <Reveal delay={140}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mute">{study.subtitle}</p>
          </Reveal>
        </header>

        {/* meta strip */}
        <Reveal delay={100}>
          <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {meta.map(([label, value]) => (
              <div key={label} className="bg-surface px-4 py-3.5 transition-colors duration-300 hover:bg-raise">
                <dt className="font-mono text-[9px] uppercase tracking-[0.22em] text-mute">{label}</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          {/* body */}
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-acc">Abstract</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-relaxed text-ink">{study.summary}</p>
            </Reveal>

            <Block index="01" title="Challenge" block={study.challenge} />
            <Block index="02" title="Transformation" block={study.transformation} />
            <Block index="03" title="Impact" block={study.impact} />

            <Reveal>
              <blockquote className="relative mt-14 border border-line bg-surface p-7 sm:p-8">
                <IconQuote className="absolute -top-4 left-6 h-8 w-8 bg-surface px-1 text-acc" />
                <p className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                  “{study.quote.text}”
                </p>
                <footer className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  — {study.quote.attribution}
                </footer>
              </blockquote>
            </Reveal>
          </div>

          {/* sticky snapshot */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal delay={120}>
                <div className="border border-line bg-surface">
                  <p className="border-b border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
                    Engagement snapshot
                  </p>
                  <ul className="divide-y divide-line">
                    {study.metrics.map((m) => (
                      <li key={m.label} className="group px-5 py-4 transition-colors duration-300 hover:bg-raise">
                        <p className="tabular font-display text-3xl font-bold tracking-tight text-acc">{m.value}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">{m.label}</p>
                        {m.note && <p className="mt-1 text-xs text-mute">{m.note}</p>}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-line px-5 py-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">Stack</p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {study.stack.map((s) => (
                        <li key={s} className="border border-line bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-soft">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-line px-5 py-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">Disciplines</p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {study.tags.map((t) => (
                        <li key={t} className="border border-line bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-mute">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>

        {/* prev / next */}
        <nav className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2" aria-label="Adjacent case studies">
          {prev ? (
            <Link to={`/case-studies/${prev.slug}`} className="group bg-surface p-6 transition-colors duration-300 hover:bg-raise">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                <IconArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                Previous engagement
              </p>
              <p className="mt-3 font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-acc">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div className="bg-surface p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">Start of index</p>
            </div>
          )}
          {next ? (
            <Link
              to={`/case-studies/${next.slug}`}
              className="group bg-surface p-6 text-right transition-colors duration-300 hover:bg-raise"
            >
              <p className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                Next engagement
                <IconArrowNE className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
              <p className="mt-3 font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-acc">
                {next.title}
              </p>
            </Link>
          ) : (
            <div className="bg-surface p-6 text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">End of index</p>
            </div>
          )}
        </nav>
      </article>
    </>
  );
}
