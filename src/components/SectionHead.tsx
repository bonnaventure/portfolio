import type { ReactNode } from "react";
import { LineReveal, Reveal } from "../lib/motion";

interface Props {
  index: string;
  eyebrow: string;
  title: ReactNode;
  note?: ReactNode;
  children?: ReactNode;
}

export function SectionHead({ index, eyebrow, title, note, children }: Props) {
  return (
    <div className="mb-10 grid gap-6 lg:mb-12 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="text-acc">{index}</span>
            <span className="inline-block h-px w-8 bg-acc" aria-hidden />
            {eyebrow}
          </p>
        </Reveal>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,3.6vw,2.9rem)] font-bold leading-[1.08] tracking-tight">
          <LineReveal>{title}</LineReveal>
        </h2>
      </div>
      {note && (
        <Reveal delay={120} className="lg:col-span-4">
          <p className="max-w-sm text-sm leading-relaxed text-mute lg:ml-auto lg:text-right">{note}</p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
