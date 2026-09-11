import { useMemo, useState } from "react";
import { CaseStudyCard } from "../components/CaseStudyCard";
import { SectionHead } from "../components/SectionHead";
import { Reveal } from "../lib/motion";
import { allTags, getCaseStudies } from "../content/caseStudies";

export function CaseStudies() {
  const studies = getCaseStudies();
  const tags = allTags();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(
    () => (activeTag ? studies.filter((s) => s.tags.includes(activeTag)) : studies),
    [studies, activeTag]
  );

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:pt-40">
      <SectionHead
        index="02"
        eyebrow="Case study index"
        title="Transformations, documented."
        note={`Every engagement below follows the same anatomy: challenge → transformation → impact. Filter by discipline, or read them in sequence.`}
      />

      {/* tag filter */}
      <Reveal>
        <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by tag">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-300 ${
              activeTag === null
                ? "border-acc bg-acc text-accink"
                : "border-strong text-soft hover:border-acc hover:text-acc"
            }`}
          >
            All · {studies.length}
          </button>
          {tags.map((t) => {
            const active = activeTag === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTag(active ? null : t)}
                aria-pressed={active}
                className={`border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-all duration-300 ${
                  active
                    ? "border-acc bg-acc text-accink"
                    : "border-line text-mute hover:border-acc hover:text-acc"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
          Showing {String(filtered.length).padStart(2, "0")} / {String(studies.length).padStart(2, "0")} engagements
          {activeTag && (
            <>
              {" "}
              · filter: <span className="text-acc">{activeTag}</span>
            </>
          )}
        </p>
      </Reveal>

      <div>
        {filtered.map((s, i) => (
          <Reveal key={s.slug} delay={i * 70}>
            <CaseStudyCard study={s} index={studies.indexOf(s)} />
          </Reveal>
        ))}
      </div>

      {/* content-system colophon */}
      <Reveal delay={120}>
        <div className="mt-14 border border-line bg-surface p-6 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-acc">Under the hood</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-soft">
            This index is a <strong className="text-ink">typed content collection</strong> — the same contract as an
            Astro <code className="font-mono text-xs text-acc">defineCollection</code>. Each case study is one
            schema-enforced entry; publishing a new study is a single file drop with zero component edits.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
