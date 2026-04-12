import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "SEO & Marketing Digital Marrakech — Google Ads, Social Ads",
  description:
    "Services SEO et marketing digital à Marrakech : référencement naturel, Google Ads, Social Ads et Analytics. Boostez votre visibilité en ligne.",
  alternates: { canonical: "https://geniusmarketing.ma/services/seo-marketing" },
};

const features = [
  {
    title: "Audit SEO Complet",
    description: "Analyse approfondie de votre site : technique, contenu, backlinks. Identification des axes d'amélioration prioritaires.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
      </svg>
    ),
  },
  {
    title: "Référencement Naturel",
    description: "Stratégie SEO complète : optimisation on-page, création de contenu, netlinking et suivi des positions sur Google.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: "Google Ads",
    description: "Campagnes Search, Display et Shopping ultra-ciblées. ROI maximisé grâce à une gestion experte de vos budgets publicitaires.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    title: "Social Ads",
    description: "Publicités Facebook, Instagram et TikTok. Ciblage précis, créatifs percutants et optimisation continue des performances.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    title: "Analytics & Data",
    description: "Configuration de Google Analytics 4, Data Studio et suivi de conversions. Des données exploitables pour des décisions éclairées.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    title: "Email Marketing",
    description: "Newsletters, séquences automatisées et campagnes segmentées. Le canal le plus rentable pour fidéliser votre audience.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
];

const results = [
  { metric: "Top 3", label: "Google pour vos mots-clés cibles" },
  { metric: "3x", label: "Augmentation du trafic organique moyen" },
  { metric: "-40%", label: "Réduction du coût par acquisition" },
  { metric: "+200%", label: "Retour sur investissement publicitaire" },
];

export default function SeoMarketingPage() {
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
                Service — 02
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight text-brand-offwhite mb-6"
                style={{ fontFamily: "var(--font-syne)" }}>
                SEO &<br />
                <span className="text-brand-gold">Marketing Digital</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-brand-gray text-xl leading-relaxed max-w-2xl mb-8">
                Soyez visible là où vos clients vous cherchent. Nous combinons
                référencement naturel et publicité digitale pour maximiser votre
                retour sur investissement.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <a href="https://wa.me/212675754651" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-black font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200">
                Audit gratuit
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-brand-dark border-y border-brand-border py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((r, i) => (
              <AnimateOnScroll key={r.label} delay={i * 0.08}>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-brand-gold mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {r.metric}
                  </div>
                  <div className="text-brand-gray text-sm">{r.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <AnimateOnScroll>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite mb-4"
                style={{ fontFamily: "var(--font-syne)" }}>
                Nos expertises<span className="text-brand-gold"> digitales.</span>
              </h2>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.07}>
                <div className="group p-7 rounded-2xl border border-brand-border bg-brand-dark hover:border-brand-gold/30 transition-all duration-300 h-full">
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

      <CTASection />
    </>
  );
}
