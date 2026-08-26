import { useEffect, useState } from "react";
import { Link, type Route } from "../lib/router";
import { navLinks, profile } from "../content/site";
import { IconClose, IconMenu, IconMoon, IconSun } from "./Icons";

function isActive(route: Route, href: string): boolean {
  if (href === "/") return route.name === "home";
  if (href === "/case-studies") return route.name === "case-studies" || route.name === "case-study";
  if (href === "/stack") return route.name === "stack";
  if (href === "/about") return route.name === "about";
  return false;
}

export function Header({ route }: { route: Route }) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [route]);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("jw-theme", next ? "dark" : "light");
    } catch {
      /* private mode */
    }
    setDark(next);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* status strip */}
      <div className="hidden border-b border-line bg-paper/80 backdrop-blur-md sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          <span>JW://portfolio · v2.6.0</span>
          <span className="flex items-center gap-2">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acc pulse-ring" />
            <span className="text-acc">Open to leadership roles</span>
          </span>
        </div>
      </div>

      {/* main nav */}
      <div className="border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <Link to="/" className="group flex items-center gap-3" aria-label="Home">
            <span className="grid h-9 w-9 place-items-center border border-ink bg-ink font-mono text-xs font-bold text-paper transition-colors duration-300 group-hover:border-acc group-hover:bg-acc">
              JW
            </span>
            <span className="hidden leading-tight md:block">
              <span className="block font-display text-sm font-semibold tracking-tight">Jaron Whittingham</span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                E-Com · MarTech · DX
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((l) => {
              const active = isActive(route, l.href);
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-acc" : "text-soft hover:text-ink"
                  }`}
                >
                  <span className={`mr-1.5 ${active ? "text-acc" : "text-mute"}`}>{l.index}</span>
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-acc transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`mailto:${profile.email}`}
              className="hidden items-center gap-2 border border-strong px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-soft transition-all duration-300 hover:border-acc hover:text-acc md:flex"
            >
              Let&rsquo;s talk
              <span aria-hidden>→</span>
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="relative grid h-9 w-9 place-items-center border border-strong text-soft transition-all duration-300 hover:border-acc hover:text-acc"
            >
              <IconSun
                className={`h-4 w-4 absolute transition-all duration-500 ${
                  dark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
              <IconMoon
                className={`h-4 w-4 absolute transition-all duration-500 ${
                  dark ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center border border-strong text-soft transition-colors hover:border-acc hover:text-acc lg:hidden"
            >
              {open ? <IconClose className="h-4.5 w-4.5" /> : <IconMenu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`grid overflow-hidden border-line transition-all duration-500 lg:hidden ${
            open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
          }`}
        >
          <nav className="min-h-0 overflow-hidden" aria-label="Mobile">
            <ul className="space-y-1 px-5 py-4">
              {navLinks.map((l) => {
                const active = isActive(route, l.href);
                return (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className={`flex items-baseline gap-3 border-b border-line py-3 font-display text-lg font-semibold tracking-tight ${
                        active ? "text-acc" : "text-ink"
                      }`}
                    >
                      <span className="font-mono text-[10px] tracking-[0.2em] text-mute">{l.index}</span>
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc"
                >
                  → {profile.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
