import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

/* Motion primitives — every one honors prefers-reduced-motion. */

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement>(threshold = 0.15): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Fade-up scroll reveal. */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      className={`${className} ${inView ? "is-in" : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/** Line-mask reveal for display headings. */
export function LineReveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`mask-line ${inView ? "is-in" : ""} ${className}`}>
      <span style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</span>
    </div>
  );
}

const GLYPHS = "▓▒░<>/\\{}[]=+*#%&";

/** Scramble-decode effect. Returns the animating string. */
export function useScramble(text: string, delay = 0): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(() => (reduced ? text : text.replace(/[^\s]/g, " ")));
  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }
    let raf = 0;
    let frame = 0;
    const totalFrames = Math.max(26, Math.round(text.length * 0.9));
    const timer = window.setTimeout(() => {
      const tick = () => {
        frame += 1;
        const revealed = Math.floor((frame / totalFrames) * text.length);
        let s = "";
        for (let i = 0; i < text.length; i += 1) {
          const c = text[i];
          if (c === " " || i < revealed) s += c;
          else if (i < revealed + 7) s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          else s += " ";
        }
        setOut(frame >= totalFrames ? text : s);
        if (frame < totalFrames) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [text, delay, reduced]);
  return out;
}

/** Ticking local clock (HH:MM:SS). */
export function useClock(): string {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now.toLocaleTimeString("en-CA", { hour12: false });
}

/** 0..1 page scroll progress. */
export function useScrollProgress(): number {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}
