import type { ReactNode } from "react";
import { stackGroups } from "../content/site";
import { IconCart, IconChart, IconCompass, IconLayers } from "./Icons";

const groupIcons: Record<string, ReactNode> = {
  transformation: <IconLayers className="h-4.5 w-4.5" />,
  commerce: <IconCart className="h-4.5 w-4.5" />,
  data: <IconChart className="h-4.5 w-4.5" />,
  ops: <IconCompass className="h-4.5 w-4.5" />,
};

export function TechStackMatrix() {
  return (
    <div className="grid gap-px border border-line bg-line md:grid-cols-2">
      {stackGroups.map((group) => (
        <section key={group.id} className="group/cell bg-surface p-6 transition-colors duration-300 hover:bg-raise sm:p-8">
          <header className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-acc">
                {group.index} · {group.id}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{group.title}</h3>
              <p className="mt-1 text-sm text-mute">{group.tagline}</p>
            </div>
            <span className="text-strong transition-colors duration-300 group-hover/cell:text-acc">
              {groupIcons[group.id]}
            </span>
          </header>

          <ul className="mt-6">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="group/item flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0"
              >
                <span className="flex items-center gap-2.5 font-mono text-sm text-soft transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-acc">
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rotate-45 border border-strong transition-colors duration-300 group-hover/item:border-acc group-hover/item:bg-acc"
                  />
                  {item.name}
                </span>
                <span className="hidden text-right font-mono text-[10px] uppercase tracking-[0.12em] text-mute sm:block">
                  {item.note}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
