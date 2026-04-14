import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { projects } from "@/lib/portfolio";

export function PortfolioTeaser() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 lg:py-32" style={{ background: "#1e2147" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <AnimateOnScroll>
              <span
                className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Nos Réalisations
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-brand-offwhite"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Des résultats concrets
                <br />
                <span className="text-brand-gold">pour nos clients.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.15}>
              <p className="text-brand-gray text-base mt-4 max-w-xl">
                De la stratégie à l&apos;exécution, chaque projet est pensé pour
                générer de la croissance.
              </p>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.2}>
            <Link
              href="/references"
              className="inline-flex items-center gap-2 text-brand-offwhite/60 text-sm border border-brand-border px-5 py-3 rounded-full hover:border-brand-gold/40 hover:text-brand-offwhite transition-all duration-200 shrink-0 group"
            >
              Toutes nos réalisations
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <AnimateOnScroll key={project.id} delay={i * 0.08}>
              <Link
                href="/references"
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    position: "relative",
                    height: "200px",
                    background: `linear-gradient(135deg, ${project.placeholder.from} 0%, ${project.placeholder.to} 100%)`,
                    overflow: "hidden",
                  }}
                >
                  {/* Decorative pattern */}
                  <div
                    className="absolute inset-0 dot-grid opacity-20"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="text-white/20 font-bold"
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "clamp(1.5rem, 4vw, 2rem)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {project.client}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(40,43,89,0.85)" }}
                  >
                    <span
                      className="text-white text-sm font-semibold border border-white/30 px-4 py-2 rounded-full"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      Voir le projet
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <span
                    className="text-[0.65rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 inline-block"
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-white font-bold mb-1.5"
                    style={{ fontFamily: "var(--font-syne)", fontSize: "1.05rem" }}
                  >
                    {project.client}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] text-white/40 px-2 py-0.5 rounded-full"
                        style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={0.2}>
          <div className="text-center mt-12">
            <Link
              href="/references"
              className="inline-flex items-center gap-2 text-brand-gold font-medium text-sm hover:gap-3 transition-all duration-200 group"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Voir toutes nos réalisations
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
