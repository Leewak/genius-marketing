import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const pillars = [
  {
    number: "01",
    title: "Expertise Locale",
    description:
      "Ancrés à Marrakech, nous connaissons le marché marocain et francophone mieux que quiconque.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Approche Data-Driven",
    description:
      "Chaque décision repose sur des données mesurables. Nous optimisons jusqu'aux derniers détails.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Résultats Garantis",
    description:
      "98% de nos clients renouvellent leur contrat. Notre succès est directement lié au vôtre.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

export function About() {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/bg/agency9-home-bg3.webp')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-brand-black/80 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <div>
            <AnimateOnScroll>
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}>
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
              <a
                href="/a-propos"
                className="inline-flex items-center gap-2 text-brand-gold font-medium text-sm hover:gap-3 transition-all duration-200 group"
              >
                En savoir plus sur nous
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>

          {/* Right — Pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.number} delay={0.1 + i * 0.1}>
                <div className="group flex items-start gap-5 p-6 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-gold/30 transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-brand-gold/50 text-xs font-mono">
                        {pillar.number}
                      </span>
                      <h3
                        className="text-brand-offwhite font-semibold text-base"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-brand-gray text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

