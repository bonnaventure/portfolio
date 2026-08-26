import { Link } from "../lib/router";
import { navLinks, profile } from "../content/site";
import { IconDownload, IconMail } from "./Icons";
import { usePrefersReducedMotion } from "../lib/motion";

export function Footer() {
  const reduced = usePrefersReducedMotion();
  const backToTop = () => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });

  return (
    <footer className="relative border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-14">
        {/* wordmark */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-10">
          <p className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-none tracking-tight">
            Jaron&nbsp;Whittingham<span className="text-acc">_</span>
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="group flex items-center gap-2 border border-strong px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-soft transition-all duration-300 hover:border-acc hover:text-acc"
          >
            Back to top
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden>
              ↑
            </span>
          </button>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow mb-4">Index</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="link-underline font-mono text-xs uppercase tracking-[0.16em] text-soft hover:text-acc">
                    <span className="text-mute">{l.index}</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline inline-flex items-center gap-2 font-mono text-xs text-soft hover:text-acc"
                >
                  <IconMail className="h-3.5 w-3.5" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.resumeHref}
                  download
                  className="link-underline inline-flex items-center gap-2 font-mono text-xs text-soft hover:text-acc"
                >
                  <IconDownload className="h-3.5 w-3.5" /> Résumé (.txt)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Status</p>
            <p className="flex items-center gap-2 font-mono text-xs text-soft">
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acc pulse-ring" />
              {profile.availability}
            </p>
            <p className="mt-2.5 font-mono text-xs text-mute">{profile.location}</p>
          </div>
          <div>
            <p className="eyebrow mb-4">Colophon</p>
            <p className="text-sm leading-relaxed text-mute">
              Content-driven build. Adding a case study is one typed entry in{" "}
              <code className="font-mono text-xs text-acc">src/content/case-studies</code> — zero component edits.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
          <span>© 2026 Jaron Whittingham</span>
          <span>
            Engineered at the intersection of <span className="text-acc">creativity × technology × data</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
