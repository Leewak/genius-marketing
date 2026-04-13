import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CTASection } from "@/components/sections/CTASection";
import { OtherServices } from "@/components/sections/OtherServices";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "Design Web & UX à Marrakech – Interfaces Modernes & Conversion | Genius Marketing",
  description:
    "Design web et expérience utilisateur à Marrakech. UX Research, wireframes, design responsive et optimisation du parcours client.",
  alternates: {
    canonical: "https://geniusmarketing.ma/services/design-ux",
  },
};

const features = [
  {
    title: "UX Research",
    description:
      "Analyse des comportements utilisateurs, interviews et tests d'usabilité pour concevoir des interfaces basées sur des données réelles.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Wireframes & Prototypes",
    description:
      "Maquettes interactives pour valider l'architecture et le flux utilisateur avant le développement. Itérations rapides et collaboration fluide.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="7" y="7" width="3" height="9" />
        <rect x="14" y="7" width="3" height="5" />
      </svg>
    ),
  },
  {
    title: "UI Design Premium",
    description:
      "Interfaces visuellement impactantes qui reflètent votre identité de marque. Typographie, couleurs et composants soigneusement pensés.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4" />
      </svg>
    ),
  },
  {
    title: "Design System",
    description:
      "Bibliothèque de composants réutilisables pour une cohérence visuelle parfaite sur toutes vos plateformes digitales.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="6" height="6" />
        <rect x="16" y="3" width="6" height="6" />
        <rect x="9" y="3" width="6" height="6" />
        <path d="M2 13h20M5 13v8M12 13v8M19 13v8" />
      </svg>
    ),
  },
  {
    title: "Responsive Design",
    description:
      "Des designs qui s'adaptent parfaitement à chaque écran. Mobile, tablette et desktop — une expérience cohérente partout.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Tests Utilisateurs",
    description:
      "Validation de vos interfaces par de vrais utilisateurs. Identification des points de friction et optimisation continue de l'expérience.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function DesignUXPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Breadcrumb
            items={[
              { name: "Accueil", url: "https://geniusmarketing.ma" },
              { name: "Services", url: "https://geniusmarketing.ma/services" },
              {
                name: "Design Web & UX",
                url: "https://geniusmarketing.ma/services/design-ux",
              },
            ]}
          />
          <div className="max-w-4xl">
            <AnimateOnScroll delay={0.05}>
              <span
                className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Service — 03
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight text-brand-offwhite mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Design Web & UX
                <br />
                <span className="text-brand-gold">à Marrakech</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-brand-gray text-xl leading-relaxed max-w-2xl mb-8">
                Des expériences digitales qui captivent, engagent et
                convertissent. Chaque interface est conçue avec soin pour vos
                utilisateurs.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <a
                href="https://wa.me/212675754651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-black font-semibold px-7 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200"
              >
                Discuter de mon projet
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Design Process Visual */}
      <section className="bg-brand-dark border-y border-brand-border py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateOnScroll>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
              {["Recherche", "Idéation", "Design", "Test", "Livraison"].map(
                (phase, i) => (
                  <div key={phase} className="flex items-center gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold text-sm font-bold mb-2"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-brand-offwhite/70 text-sm font-medium">
                        {phase}
                      </span>
                    </div>
                    {i < 4 && (
                      <div className="hidden sm:block w-8 h-px bg-brand-gold/20" />
                    )}
                  </div>
                )
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <AnimateOnScroll>
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Notre expertise
                <span className="text-brand-gold"> design.</span>
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
                  <h3
                    className="text-brand-offwhite font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <OtherServices current="/services/design-ux" />
      <CTASection />
    </>
  );
}
