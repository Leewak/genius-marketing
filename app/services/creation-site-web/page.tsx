import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Création Site Web Marrakech — Vitrine, E-Commerce, WordPress",
  description:
    "Création de sites web professionnels à Marrakech : sites vitrines, e-commerce, WordPress. Design premium, SEO intégré et performance optimale.",
  alternates: { canonical: "https://geniusmarketing.ma/services/creation-site-web" },
};

const features = [
  {
    title: "Sites Vitrines",
    description:
      "Votre présence professionnelle en ligne. Un design soigné qui reflète votre image de marque et présente vos services de façon convaincante.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    description:
      "Boutiques en ligne performantes avec WooCommerce ou Shopify. Gestion des stocks, paiements sécurisés et expérience d'achat optimisée.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    title: "WordPress Sur Mesure",
    description:
      "Sites WordPress personnalisés, faciles à gérer. Thèmes sur mesure, plugins optimisés et interface d'administration intuitive.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: "SEO On-Page Intégré",
    description:
      "Chaque site est livré optimisé pour les moteurs de recherche : structure HTML5, balises meta, vitesse de chargement et Core Web Vitals.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
      </svg>
    ),
  },
  {
    title: "Design Responsive",
    description:
      "Mobile-first par conception. Votre site s'affiche parfaitement sur tous les écrans : smartphones, tablettes et ordinateurs.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "Hébergement & Maintenance",
    description:
      "Nous gérons votre hébergement, sécurité et mises à jour. Vous vous concentrez sur votre métier, on s'occupe de la technique.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
];

const process = [
  { step: "01", title: "Brief & Découverte", desc: "Analyse de vos besoins, objectifs et cible." },
  { step: "02", title: "Maquettes", desc: "Wireframes et designs validés avec vous." },
  { step: "03", title: "Développement", desc: "Intégration et développement de votre site." },
  { step: "04", title: "Tests & Lancement", desc: "Validation, optimisation et mise en ligne." },
];

export default function CreationSiteWebPage() {
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
                Service — 01
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight text-brand-offwhite mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Création
                <br />
                <span className="text-brand-gold">Site Web</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-brand-gray text-xl leading-relaxed max-w-2xl mb-8">
                Des sites web professionnels, performants et optimisés pour
                convertir vos visiteurs en clients. Chaque projet est unique,
                chaque pixel est pensé pour votre succès.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <a
                href="https://wa.me/212675754651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-black font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200"
              >
                Démarrer mon projet
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <AnimateOnScroll>
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Ce que nous créons
                <span className="text-brand-gold"> pour vous.</span>
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

      {/* Process */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14 text-center">
            <AnimateOnScroll>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite"
                style={{ fontFamily: "var(--font-syne)" }}>
                Notre processus de création.
              </h2>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimateOnScroll key={p.step} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-brand-border bg-brand-dark">
                  <div className="text-brand-gold/30 text-4xl font-bold font-mono mb-4"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {p.step}
                  </div>
                  <h3 className="text-brand-offwhite font-semibold mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}>
                    {p.title}
                  </h3>
                  <p className="text-brand-gray text-sm">{p.desc}</p>
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
