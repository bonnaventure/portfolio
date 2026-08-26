import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";

/* Lightweight hash router — works when dist/index.html is served statically. */

export type Route =
  | { name: "home" }
  | { name: "case-studies" }
  | { name: "case-study"; slug: string }
  | { name: "stack" }
  | { name: "about" }
  | { name: "not-found" };

export function parseHash(hash: string): Route {
  const clean = hash.replace(/^#/, "") || "/";
  const parts = clean.split("/").filter(Boolean);
  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "case-studies") {
    if (parts.length === 1) return { name: "case-studies" };
    return { name: "case-study", slug: decodeURIComponent(parts[1]) };
  }
  if (parts[0] === "stack") return { name: "stack" };
  if (parts[0] === "about") return { name: "about" };
  return { name: "not-found" };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const onHash = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

export function navigate(path: string): void {
  window.location.hash = path;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

/** Renders <a href="#/..."> — plain anchors, so it works with JS-free navigation too. */
export function Link({ to, children, ...rest }: LinkProps) {
  return (
    <a href={`#${to}`} {...rest}>
      {children}
    </a>
  );
}
