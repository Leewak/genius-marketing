import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Nos Services — Marketing Digital, SEO, Design Web",
  description:
    "Découvrez tous les services de Genius Marketing : création de sites web, SEO, design UX et stratégie marketing à Marrakech.",
  alternates: { canonical: "https://geniusmarketing.ma/services" },
};

const services = [
  {
    href: "/services/creation-site-web",
    number: "01",
    title: "Création Site Web",
    description:
      "Des sites web sur mesure qui reflètent l'image de votre marque et convertissent vos visiteurs en clients. De la vitrine institutionnelle à la boutique e-commerce complète.",
    features: [
      "Sites vitrines & institutionnels",
      "E-commerce (WooCommerce, Shopify)",
      "WordPress sur mesure",
      "SEO on-page intégré",
      "Design responsive mobile-first",
      "Performances & Core Web Vitals",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    href: "/services/seo-marketing",
    number: "02",
    title: "SEO & Marketing Digital",
    description:
      "Positionnez votre entreprise en première page de Google et maximisez votre retour sur investissement publicitaire avec nos campagnes digitales ciblées.",
    features: [
      "Audit SEO technique complet",
      "Optimisation on-page & off-page",
      "Campagnes Google Ads",
      "Social Ads (Facebook, Instagram)",
      "Email marketing",
      "Reporting analytics mensuel",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
      </svg>
    ),
  },
  {
    href: "/services/design-ux",
    number: "03",
    title: "Design Web & UX",
    description:
      "Des expériences digitales mémorables, conçues pour vos utilisateurs. Nous combinons esthétique premium et ergonomie pour maximiser l'engagement.",
    features: [
      "UX Research & audit utilisateur",
      "Wireframes & prototypes",
      "UI Design haut de gamme",
      "Design System complet",
      "Responsive design mobile-first",
      "Tests utilisateurs",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    href: "/services/strategie-marketing",
    number: "04",
    title: "Stratégie Marketing",
    description:
      "Une vision claire et un plan d'action solide pour accélérer votre croissance. Nous construisons la feuille de route digitale qui transforme vos ambitions en résultats.",
    features: [
      "Étude de marché & concurrentielle",
      "Définition du positionnement",
      "Tunnel de conversion optimisé",
      "Plan marketing 360°",
      "Stratégie de contenu",
      "KPIs & tableau de bord",
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateOnScroll>
            <span
              className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6 block"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Nos Services
            </span>
          </AnimateOnScroll>
          <div className="max-w-4xl">
            <AnimateOnScroll delay={0.1}>
              <h1
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight text-brand-offwhite mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Tout pour faire
                <br />
                <span className="text-brand-gold">grandir votre marque.</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-brand-gray text-xl leading-relaxed max-w-2xl">
                De la création de votre site web à votre stratégie marketing
                globale — nous vous accompagnons à chaque étape de votre
                transformation digitale.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.href} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group block p-8 lg:p-10 rounded-2xl border border-brand-border bg-brand-black hover:border-brand-gold/40 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    {/* Left */}
                    <div className="flex items-center gap-4 lg:w-64 shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-brand-gold/40 text-xs font-mono mb-0.5">
                          {service.number}
                        </div>
                        <h2
                          className="text-brand-offwhite font-bold text-lg group-hover:text-brand-gold transition-colors duration-300"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Middle */}
                    <div className="flex-1">
                      <p className="text-brand-gray text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-brand-offwhite/50">
                            <span className="w-1 h-1 rounded-full bg-brand-gold/60 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold/40 group-hover:border-brand-gold/40 group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-all duration-300">
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
