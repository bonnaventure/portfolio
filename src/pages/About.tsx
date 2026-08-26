import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../lib/motion";
import { bio, competencies, profile, timeline } from "../content/site";
import { Link } from "../lib/router";
import { Barcode, IconArrowNE, IconMail } from "../components/Icons";

const PORTRAIT_URL = "https://image.qwenlm.ai/generated-images/00017297-a4a9-4537-8f24-78b05212daf3/_result.png";

const exploring = ["AI merchandising agents", "Server-side tracking", "Composable commerce", "AEO strategy", "Edge personalization"];

export function About() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-20 pt-36 sm:pt-40">
        <SectionHead
          index="04"
          eyebrow="About"
          title="Operator at the intersection of creativity, technology & data."
          note="Fifteen years of turning disconnected systems into engines for growth — from the server room to the boardroom."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          {/* portrait */}
          <Reveal className="lg:col-span-4">
            <figure className="relative border border-line bg-surface">
              {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map((pos) => (
                <span key={pos} aria-hidden className={`absolute ${pos} z-10 font-mono text-xs leading-none text-strong`}>
                  +
                </span>
              ))}
              <div className="overflow-hidden">
                <img
                  src={PORTRAIT_URL}
                  alt="Abstract wireframe portrait representing Jaron Whittingham"
                  className="w-full transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">Executive profile — 2026</span>
                <Barcode className="h-4 w-20 text-strong" />
              </figcaption>
            </figure>
          </Reveal>

          {/* bio */}
          <div className="lg:col-span-8">
            <div className="space-y-5">
              {bio.map((p, i) => (
                <Reveal key={p.slice(0, 24)} delay={i * 100}>
                  <p className={`leading-relaxed ${i === 0 ? "text-lg font-medium text-ink sm:text-xl" : "text-soft"}`}>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={260}>
              <div className="mt-9 border border-line bg-surface p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-acc">Currently exploring</p>
                <ul className="mt-3.5 flex flex-wrap gap-2">
                  {exploring.map((e) => (
                    <li
                      key={e}
                      className="border border-line bg-paper px-3 py-1.5 font-mono text-[11px] text-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-acc hover:text-acc"
                    >
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2.5 bg-acc px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-acc/25"
                >
                  <IconMail className="h-4 w-4" /> {profile.email}
                </a>
                <Link
                  to="/case-studies"
                  className="group inline-flex items-center gap-2.5 border border-strong px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-soft transition-all duration-300 hover:border-acc hover:text-acc"
                >
                  See the work
                  <IconArrowNE className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* core competencies — sticky two-column */}
      <section className="border-t border-line bg-surface" aria-labelledby="competencies">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Reveal>
                  <p className="eyebrow flex items-center gap-3">
                    <span className="text-acc">04.A</span>
                    <span className="inline-block h-px w-8 bg-acc" aria-hidden />
                    Core competencies
                  </p>
                  <h2 id="competencies" className="mt-4 font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-bold leading-[1.1] tracking-tight">
                    What I bring to the table.
                  </h2>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">
                    Five disciplines that show up in every engagement — the edges where growth is actually won.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ul>
                {competencies.map((c, i) => (
                  <Reveal key={c.code} delay={i * 70}>
                    <li className="group grid gap-3 border-t border-line py-7 transition-all duration-300 last:border-b hover:bg-paper hover:pl-3 sm:grid-cols-[7rem_1fr] sm:gap-6">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-acc">{c.code}</span>
                      <span>
                        <span className="font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-acc sm:text-2xl">
                          {c.name}
                        </span>
                        <span className="mt-2 block max-w-xl text-sm leading-relaxed text-mute">{c.description}</span>
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* career arc */}
      <section className="border-t border-line" aria-labelledby="arc">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead
            index="04.B"
            eyebrow="Career arc"
            title={<span id="arc">Fifteen years, one trajectory.</span>}
            note="From owning the whole website to owning the transformation roadmap — each era compounded into the next."
          />
          <ol className="relative ml-2 border-l border-strong sm:ml-4">
            {timeline.map((t, i) => (
              <Reveal key={t.years} delay={i * 90}>
                <li className="group relative pb-12 pl-8 last:pb-0 sm:pl-12">
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rotate-45 border border-acc bg-paper transition-colors duration-300 group-hover:bg-acc"
                  />
                  <p className="tabular font-mono text-xs uppercase tracking-[0.24em] text-acc">{t.years}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">{t.title}</h3>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">{t.org}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-soft">{t.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
