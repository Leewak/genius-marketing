import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const benefits = [
  {
    number: "01",
    title: "Expertise Locale",
    description:
      "Une compréhension profonde du marché marocain et des comportements des consommateurs locaux.",
  },
  {
    number: "02",
    title: "Résultats Mesurables",
    description:
      "Rapports mensuels détaillés. Chaque action est mesurée, analysée et optimisée.",
  },
  {
    number: "03",
    title: "Approche Personnalisée",
    description:
      "Pas de formule générique. Chaque stratégie est construite sur mesure pour votre secteur.",
  },
  {
    number: "04",
    title: "Technologie de Pointe",
    description:
      "Outils dernière génération : IA, automation, A/B testing et analytics avancés.",
  },
  {
    number: "05",
    title: "Support Continu",
    description:
      "Votre équipe dédiée est disponible pour vous accompagner à chaque étape.",
  },
  {
    number: "06",
    title: "ROI Maximisé",
    description:
      "Chaque dirham investi est optimisé pour générer un retour sur investissement maximal.",
  },
];

export function Benefits() {
  return (
    <section className="bg-brand-black py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <AnimateOnScroll>
            <span
              className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Pourquoi nous choisir
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-brand-offwhite"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              6 raisons de faire confiance
              <br />
              à <span className="text-brand-gold">Genius Marketing.</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <AnimateOnScroll key={benefit.number} delay={i * 0.07}>
              <div
                className="group relative p-7 pl-9 rounded-2xl bg-brand-dark hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                {/* Left accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/20 group-hover:bg-white rounded-l-2xl transition-colors duration-300" />

                {/* Number watermark — large, top-right, very low opacity */}
                <div
                  className="absolute top-3 right-4 font-bold font-mono leading-none select-none text-white pointer-events-none"
                  style={{
                    fontSize: "3rem",
                    opacity: 0.06,
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {benefit.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className="text-brand-offwhite font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
