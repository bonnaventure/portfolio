/** Quiet, static platform strip — readable at a glance, no animation. */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="border-y border-line bg-surface" role="presentation" aria-label="Platforms and tools">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-5 py-4 sm:justify-start">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-mute transition-colors duration-300 hover:text-acc">
              {item}
            </span>
            {i < items.length - 1 && (
              <span aria-hidden className="inline-block h-1 w-1 rotate-45 border border-strong" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
