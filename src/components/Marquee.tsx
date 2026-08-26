import { IconSpark } from "./Icons";

export function Marquee({ items }: { items: string[] }) {
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {items.map((item) => (
        <span key={`${item}-${ariaHidden}`} className="flex items-center">
          <span className="px-6 font-mono text-xs uppercase tracking-[0.3em] text-soft sm:px-8">{item}</span>
          <IconSpark className="h-3 w-3 shrink-0 text-acc" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface py-3.5" role="presentation">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
