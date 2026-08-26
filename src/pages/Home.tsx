import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { TechStackMatrix } from "../components/TechStackMatrix";
import { SectionHead } from "../components/SectionHead";
import { Link } from "../lib/router";
import { Reveal } from "../lib/motion";
import { getCaseStudies } from "../content/caseStudies";
import { marqueeItems, principles, profile } from "../content/site";
import { IconArrowNE, IconArrowRight, IconCart, IconLayers, IconNode } from "../components/Icons";

const bridgeNodes = [
  {
    icon: <IconLayers className="h-5 w-5" />,
    title: "Technical Web Management",
    body: "CMS architecture, headless delivery, performance, and the operational discipline that keeps experiences reliable.",
  },
  {
    icon: <IconNode className="h-5 w-5" />,
    title: "Enterprise MarTech",
    body: "CRM-powered migrations, lifecycle systems, and segmentation engineered on live customer data.",
  },
  {
    icon: <IconCart className="h-5 w-5" />,
    title: "E-Commerce Revenue",
    body: "CRO, catalog hygiene, and commerce operations that convert infrastructure into provable P&L impact.",
  },
];

export function Home() {
  const studies = getCaseStudies();

  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />

      {/* ---- 01 featured transformations ---- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24" aria-labelledby="featured">
        <SectionHead
          index="01"
          eyebrow="Selected work"
          title={<span id="featured">Featured transformations</span>}
          note="Three engagements, three operating models rebuilt — each with the receipts attached."
        />
        <div>
          {studies.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <CaseStudyCard study={s} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-8 flex justify-end">
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-acc"
            >
              View full index
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---- 02 the bridge ---- */}
      <section className="border-y border-line bg-surface" aria-labelledby="bridge">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead
            index="02"
            eyebrow="The bridge"
            title={<span id="bridge">The gap between systems is where revenue leaks.</span>}
            note="Most organizations don't lack tools — they lack connective tissue. I build the tissue."
          />
          <div className="grid gap-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
            {bridgeNodes.flatMap((n, i) => {
              const connector =
                i > 0 ? (
                  <div key={`c-${n.title}`} aria-hidden className="relative mx-auto my-4 h-10 w-px bg-strong lg:mx-0 lg:my-0 lg:h-px lg:w-10 lg:self-center lg:bg-strong">
                    <span className="connector-dot absolute left-0 top-1/2 hidden h-2 w-2 -translate-y-1/2 rotate-45 bg-acc lg:block" />
                  </div>
                ) : null;
              return [
                connector,
                <Reveal key={n.title} delay={i * 130}>
                  <div className="sweep group relative h-full border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-strong sm:p-7">
                    <span className="flex items-center justify-between">
                      <span className="text-acc">{n.icon}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                        Discipline {["I", "II", "III"][i]}
                      </span>
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{n.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{n.body}</p>
                  </div>
                </Reveal>,
              ];
            })}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 text-center font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
              Web management <span className="text-gold">→</span> MarTech <span className="text-gold">→</span> Revenue
              <span className="ml-3 text-acc">one continuous system</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---- 03 tech stack matrix ---- */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24" aria-labelledby="stack-home">
        <SectionHead
          index="03"
          eyebrow="Tech stack matrix"
          title={<span id="stack-home">An operating toolkit, not a logo wall.</span>}
          note={
            <>
              Four quadrants, one operating model.{" "}
              <Link to="/stack" className="link-underline text-acc">
                Full matrix &amp; calibration →
              </Link>
            </>
          }
        />
        <Reveal>
          <TechStackMatrix />
        </Reveal>
      </section>

      {/* ---- 04 operating system ---- */}
      <section className="border-t border-line" aria-labelledby="os">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead
            index="04"
            eyebrow="Operating system"
            title={<span id="os">How the work gets done.</span>}
            note="Principles that survived 15 years of re-platforms, migrations, and launches."
          />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.index} className="group bg-surface p-7 transition-colors duration-300 hover:bg-raise sm:p-8">
                <Reveal delay={i * 80}>
                  <p className="tabular font-display text-3xl font-bold text-strong transition-colors duration-300 group-hover:text-acc">
                    {p.index}
                  </p>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mute">{p.body}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- 05 cta ---- */}
      <section className="border-t border-navy bg-navy text-navyink" aria-label="Contact">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow text-navyink/60">Next engagement</p>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-tight">
                  <span className="block">Let&rsquo;s build your next</span>
                  <span className="block text-gold">operating model.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Reveal delay={160}>
                <div className="flex flex-col gap-3.5">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center justify-between gap-4 bg-gold px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
                  >
                    {profile.email}
                    <IconArrowNE className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={profile.resumeHref}
                    download
                    className="inline-flex items-center justify-between gap-4 border border-navyink/35 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-navyink/85 transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    Download résumé <span aria-hidden>↓</span>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
