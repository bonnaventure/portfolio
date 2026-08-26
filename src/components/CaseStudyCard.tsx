import { Link } from "../lib/router";
import type { CaseStudy } from "../content/caseStudies";
import { IconArrowNE } from "./Icons";

interface Props {
  study: CaseStudy;
  index: number;
}

export function CaseStudyCard({ study, index }: Props) {
  const leadMetric = study.metrics[0];
  return (
    <article className="sweep group relative border-t border-line py-9 transition-colors duration-300 last:border-b hover:bg-surface lg:py-11">
      {/* accent bar grows on hover */}
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-acc transition-transform duration-500 group-hover:scale-y-100"
      />
      <div className="grid items-start gap-6 px-1 lg:grid-cols-12 lg:gap-5 lg:px-4">
        <div className="flex items-baseline gap-4 lg:col-span-2 lg:flex-col lg:items-start lg:gap-2">
          <span className="tabular font-display text-3xl font-bold text-strong transition-colors duration-300 group-hover:text-acc lg:text-4xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
            {study.category}
          </span>
        </div>

        <div className="lg:col-span-5">
          <h3 className="font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
            <Link
              to={`/case-studies/${study.slug}`}
              className="transition-colors duration-300 group-hover:text-acc"
            >
              {study.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">{study.subtitle}</p>
        </div>

        <div className="lg:col-span-3">
          <ul className="flex flex-wrap gap-1.5">
            {study.tags.map((t) => (
              <li
                key={t}
                className="border border-line bg-paper px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-soft"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-4 lg:col-span-2 lg:flex-col lg:items-end lg:justify-start lg:text-right">
          {leadMetric && (
            <div>
              <p className="tabular font-display text-2xl font-bold text-ink">{leadMetric.value}</p>
              <p className="mt-0.5 max-w-[11rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-mute">
                {leadMetric.label}
              </p>
            </div>
          )}
          <Link
            to={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-acc"
          >
            Open
            <IconArrowNE className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
