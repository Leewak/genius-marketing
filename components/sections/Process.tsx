import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Audit",
    subtitle: "Analyse approfondie",
    description:
      "Nous analysons votre situation actuelle : site web, SEO, concurrents, audience. Un diagnostic complet pour identifier les opportunités.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Stratégie",
    subtitle: "Plan d'action sur mesure",
    description:
      "Nous élaborons une stratégie personnalisée avec des objectifs clairs, des KPIs mesurables et un calendrier d'exécution précis.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Exécution",
    subtitle: "Mise en œuvre rigoureuse",
    description:
      "Notre équipe d'experts met en œuvre chaque action avec précision : développement, contenus, campagnes et optimisations continues.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Croissance",
    subtitle: "Optimisation & scaling",
    description:
      "Nous analysons les résultats, optimisons les performances et scalons ce qui fonctionne pour une croissance continue et durable.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
];

export function Process() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg/agency9-home-bg5.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/88 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimateOnScroll>
            <span
              className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Notre Processus
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-brand-offwhite"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Comment nous vous
              <span className="text-brand-gold"> propulsons</span>.
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 0.1}>
              <div className="relative group">
                {/* Arrow connector (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 z-20 text-white/20 select-none"
                    style={{ left: "calc(100% + 2px)", fontSize: "1.6rem", lineHeight: 1 }}
                  >
                    →
                  </div>
                )}

                {/* Card */}
                <div
                  className="relative rounded-2xl p-7 overflow-hidden h-full transition-all duration-300 hover:bg-white/[0.06]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  {/* Number watermark */}
                  <div
                    className="absolute bottom-3 right-4 font-bold font-mono leading-none select-none text-white pointer-events-none"
                    style={{
                      fontSize: "6rem",
                      opacity: 0.04,
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon + number */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                        {step.icon}
                      </div>
                      <span
                        className="text-white/40 text-sm font-mono font-bold"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3
                      className="text-brand-offwhite text-xl font-bold mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-white/50 text-xs font-medium uppercase tracking-wide mb-3"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {step.subtitle}
                    </p>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
