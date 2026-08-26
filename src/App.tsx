import { useEffect } from "react";
import { Link, useRoute } from "./lib/router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { CaseStudies } from "./pages/CaseStudies";
import { CaseStudyDetail } from "./pages/CaseStudyDetail";
import { About } from "./pages/About";
import { Stack } from "./pages/Stack";
import { getCaseStudy } from "./content/caseStudies";

function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-24 pt-48 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-acc">404 · Page not found</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">404</h1>
      <p className="mt-3 max-w-sm text-soft">This route isn't in the sitemap. The index, however, is excellent.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-acc px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-accink transition-all duration-300 hover:-translate-y-0.5"
      >
        ← Return home
      </Link>
    </section>
  );
}

export default function App() {
  const route = useRoute();

  /* scroll restore + document title per route */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const base = "Jaron Whittingham — E-Commerce, MarTech & Digital Transformation";
    let title = base;
    if (route.name === "case-studies") title = `Case Studies · ${base}`;
    if (route.name === "case-study") {
      const s = getCaseStudy(route.slug);
      title = s ? `${s.title} · ${base}` : `404 · ${base}`;
    }
    if (route.name === "stack") title = `Tech Stack · ${base}`;
    if (route.name === "about") title = `About · ${base}`;
    if (route.name === "not-found") title = `404 · ${base}`;
    document.title = title;
  }, [route]);

  return (
    <div className="relative min-h-screen">
      {/* ambient background layers */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="amb-grid absolute inset-x-0 top-0 h-[140vh]" />
        <div className="glow drift-a left-[-10%] top-[-12%] h-[42rem] w-[42rem] bg-acc opacity-[0.07]" />
        <div className="glow drift-b bottom-[-18%] right-[-12%] h-[46rem] w-[46rem] bg-gold opacity-[0.07]" />
      </div>
      {/* film grain */}
      <div className="noise pointer-events-none fixed inset-0 z-[70]" aria-hidden />

      <Header route={route} />

      <main>
        {route.name === "home" && <Home />}
        {route.name === "case-studies" && <CaseStudies />}
        {route.name === "case-study" && <CaseStudyDetail slug={route.slug} />}
        {route.name === "stack" && <Stack />}
        {route.name === "about" && <About />}
        {route.name === "not-found" && <NotFound />}
      </main>

      <Footer />
    </div>
  );
}
