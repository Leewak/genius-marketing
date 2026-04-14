import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const stats = [
  { num: "2000+", label: "Projets réalisés" },
  { num: "98%", label: "Taux de rétention" },
  { num: "5+", label: "Années d'expertise" },
];

export function About() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#1e2147" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <div>
            <AnimateOnScroll>
              <span
                className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                À Propos de Genius Marketing
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight mb-6 text-brand-offwhite"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                L&apos;agence digitale qui fait
                <span className="text-brand-gold"> vraiment </span>
                la différence.
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-brand-gray text-base leading-relaxed mb-6">
                Genius Marketing est une agence de marketing digital basée à
                Marrakech, dédiée à transformer la présence en ligne des
                entreprises marocaines et internationales.
              </p>
              <p className="text-brand-gray text-base leading-relaxed mb-8">
                Nous combinons créativité, technologie et stratégie pour
                construire des marques fortes et générer une croissance
                mesurable — pas de promesses vides, uniquement des résultats
                concrets.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <Link
                href="/agence-marketing-marrakech"
                className="inline-flex items-center gap-2 text-brand-gold font-medium text-sm hover:gap-3 transition-all duration-200 group"
              >
                En savoir plus sur nous
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

          {/* Right — Visual card stack */}
          <AnimateOnScroll delay={0.15}>
            <div style={{ position: "relative", width: "100%", height: "420px" }}>

              {/* Main card */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "5%",
                  width: "88%",
                  height: "260px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "20px",
                  backdropFilter: "blur(20px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Decorative glow */}
                <div
                  style={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(100,120,255,0.2) 0%, transparent 70%)",
                    filter: "blur(30px)",
                    top: "-40px",
                    right: "-40px",
                  }}
                />
                {/* Stats inside card */}
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    padding: "2rem",
                    position: "relative",
                    zIndex: 1,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {stats.map((stat) => (
                    <div key={stat.num} style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "2rem",
                          fontWeight: 800,
                          color: "white",
                          fontFamily: "var(--font-syne)",
                        }}
                      >
                        {stat.num}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(255,255,255,0.5)",
                          marginTop: "0.25rem",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second card — bottom left */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "55%",
                  height: "140px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  backdropFilter: "blur(16px)",
                  display: "flex",
                  alignItems: "center",
                  padding: "1.25rem",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  🎯
                </div>
                <div>
                  <div
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    Orienté résultats
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.75rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    ROI mesurable garanti
                  </div>
                </div>
              </div>

              {/* Third card — bottom right */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "42%",
                  height: "140px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  backdropFilter: "blur(16px)",
                  display: "flex",
                  alignItems: "center",
                  padding: "1.25rem",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  🌍
                </div>
                <div>
                  <div
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    International
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.75rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    Maroc & mondial
                  </div>
                </div>
              </div>

            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
