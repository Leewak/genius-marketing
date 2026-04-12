import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Stratégie Marketing Marrakech — Tunnel de Conversion, Plan Marketing",
  description:
    "Stratégie marketing digitale à Marrakech : étude de marché, tunnel de conversion, plan marketing 360°. Construisez une croissance durable.",
  alternates: { canonical: "https://geniusmarketing.ma/services/strategie-marketing" },
};

const features = [
  {
    title: "Étude de Marché",
    description: "Analyse concurrentielle, identification des opportunités et compréhension approfondie de votre marché cible au Maroc et à l'international.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
      </svg>
    ),
  },
  {
    title: "Positionnement de Marque",
    description: "Définition de votre proposition de valeur unique, votre persona client et votre positionnement différenciant sur le marché.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Tunnel de Conversion",
    description: "Conception et optimisation de votre entonnoir de vente complet : de la notoriété à la fidélisation, chaque étape est optimisée.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>
      </svg>
    ),
  },
  {
    title: "Plan Marketing 360°",
    description: "Stratégie marketing globale couvrant tous les canaux : digital, social media, content marketing, SEO, paid ads et relations presse.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    title: "Stratégie de Contenu",
    description: "Plan éditorial structuré, création de contenu à valeur ajoutée et stratégie de distribution pour attirer et engager votre audience.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    title: "KPIs & Reporting",
    description: "Définition des indicateurs clés de performance, mise en place du tableau de bord et reporting mensuel détaillé pour piloter votre croissance.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
];

const deliverables = [
  "Rapport d'audit et d'analyse concurrentielle",
  "Document de positionnement de marque",
  "Personas clients détaillés",
  "Carte du tunnel de conversion",
  "Plan marketing annuel (12 mois)",
  "Calendrier éditorial",
  "Tableau de bord KPIs",
  "Roadmap d'exécution priorisée",
];

export default function StrategieMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateOnScroll>
            <a href="/services" className="inline-flex items-center gap-2 text-brand-gold/70 text-sm mb-8 hover:text-brand-gold transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Tous les services
            </a>
          </AnimateOnScroll>
          <div className="max-w-4xl">
            <AnimateOnScroll delay={0.05}>
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}>
                Service — 04
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight text-brand-offwhite mb-6"
                style={{ fontFamily: "var(--font-syne)" }}>
                Stratégie<br />
                <span className="text-brand-gold">Marketing</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-brand-gray text-xl leading-relaxed max-w-2xl mb-8">
                Une vision stratégique claire et un plan d&apos;action concret pour
                accélérer votre croissance et construire une marque forte sur le
                long terme.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <a href="https://wa.me/212675754651" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-black font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200">
                Démarrer ma stratégie
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <AnimateOnScroll>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite mb-4"
                style={{ fontFamily: "var(--font-syne)" }}>
                Ce que nous construisons
                <span className="text-brand-gold"> ensemble.</span>
              </h2>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.07}>
                <div className="group p-7 rounded-2xl border border-brand-border bg-brand-black hover:border-brand-gold/30 transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-5 group-hover:bg-brand-gold/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-brand-offwhite font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {f.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{f.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}>
                Livrables
              </span>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite mb-6"
                style={{ fontFamily: "var(--font-syne)" }}>
                Ce que vous recevez
                <span className="text-brand-gold"> à la fin.</span>
              </h2>
              <p className="text-brand-gray leading-relaxed">
                À l&apos;issue de notre mission stratégique, vous disposez d&apos;un
                arsenal complet de documents et outils pour piloter votre
                croissance en toute autonomie — ou avec notre accompagnement.
              </p>
            </AnimateOnScroll>
            <div>
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <AnimateOnScroll key={item} delay={i * 0.06}>
                    <li className="flex items-center gap-4 p-4 rounded-xl border border-brand-border bg-brand-dark hover:border-brand-gold/20 transition-colors duration-200">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-brand-offwhite/80 text-sm">{item}</span>
                    </li>
                  </AnimateOnScroll>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
