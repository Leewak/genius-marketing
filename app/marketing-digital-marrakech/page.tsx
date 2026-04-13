import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSchema } from "@/components/SchemaOrg";
import { LocalBusinessSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Marketing Digital à Marrakech – Agence Digitale | Genius Marketing",
  description:
    "Genius Marketing, votre agence de marketing digital à Marrakech. SEO, création de sites web, réseaux sociaux et stratégie digitale pour développer votre entreprise.",
  alternates: {
    canonical: "https://geniusmarketing.ma/marketing-digital-marrakech",
  },
};

const services = [
  {
    title: "SEO & Référencement naturel",
    description:
      "Positionnez votre entreprise en tête des résultats Google au Maroc. Audit technique, optimisation on-page et stratégie de contenu pour une visibilité durable.",
    href: "/services/seo-marketing",
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
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
    ),
  },
  {
    title: "Création de site web",
    description:
      "Sites vitrines, e-commerce et applications web sur mesure. Des interfaces modernes, rapides et optimisées pour la conversion.",
    href: "/services/creation-site-web",
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
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Gestion réseaux sociaux",
    description:
      "Stratégie de contenu, création de publications et community management pour bâtir une communauté engagée autour de votre marque.",
    href: "/services",
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
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
  },
  {
    title: "Google Ads & Publicité digitale",
    description:
      "Campagnes publicitaires ciblées sur Google et les réseaux sociaux. Maximisez votre ROI avec des annonces précises et des budgets optimisés.",
    href: "/services/strategie-marketing",
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
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const whyUs = [
  {
    title: "Expertise locale Marrakech",
    description:
      "Implantés à Marrakech, nous connaissons parfaitement le tissu économique local, les spécificités culturelles et les comportements des consommateurs marocains.",
    icon: "📍",
  },
  {
    title: "Approche orientée ROI",
    description:
      "Chaque action marketing est mesurée et optimisée. Nous ne travaillons pas pour de belles métriques, mais pour des résultats concrets sur votre chiffre d'affaires.",
    icon: "📈",
  },
  {
    title: "Résultats mesurables",
    description:
      "Tableaux de bord transparents, reporting mensuel et KPIs clairs. Vous savez exactement où va votre budget et quels résultats il génère.",
    icon: "✓",
  },
];

const stats = [
  { value: "90%", label: "Satisfaction client" },
  { value: "2000+", label: "Projets réalisés" },
  { value: "98%", label: "Taux de rétention" },
  { value: "5+", label: "Ans d'expérience" },
];

const faqs = [
  {
    q: "Qu'est-ce que le marketing digital ?",
    a: "Le marketing digital regroupe toutes les stratégies de promotion en ligne : SEO, réseaux sociaux, publicité digitale, email marketing et création de contenu. Il permet aux entreprises de toucher leurs clients là où ils se trouvent : sur internet.",
  },
  {
    q: "Pourquoi choisir une agence marketing digital à Marrakech ?",
    a: "Une agence locale comme Genius Marketing connaît parfaitement le marché marocain, les comportements des consommateurs locaux et les opportunités digitales spécifiques à Marrakech et au Maroc.",
  },
  {
    q: "Combien coûte le marketing digital à Marrakech ?",
    a: "Les tarifs varient selon vos objectifs et les services choisis. Nous proposons des forfaits adaptés à tous les budgets, à partir de 1 500 MAD/mois. Contactez-nous pour un devis gratuit et personnalisé.",
  },
  {
    q: "Quels résultats peut-on attendre du marketing digital ?",
    a: "Les résultats dépendent de la stratégie et du secteur. En général : +50% de trafic web en 6 mois avec le SEO, retour sur investissement positif dès le premier mois avec Google Ads, et une audience engagée en 3 mois sur les réseaux sociaux.",
  },
];

export default function MarketingDigitalMarrakechPage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #3a3f8a 0%, #282B59 70%)",
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <Breadcrumb
            items={[
              { name: "Accueil", url: "https://geniusmarketing.ma" },
              {
                name: "Marketing Digital Marrakech",
                url: "https://geniusmarketing.ma/marketing-digital-marrakech",
              },
            ]}
          />

          <div className="max-w-4xl mt-4">
            <AnimateOnScroll delay={0.05}>
              <span
                className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-5 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                AGENCE DIGITALE · MARRAKECH
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h1
                className="font-bold leading-tight tracking-tight text-white mb-6"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                }}
              >
                Marketing Digital
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #d4a74a 0%, #f0c96a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  à Marrakech
                </span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-10">
                Genius Marketing accompagne les entreprises de Marrakech et du
                Maroc dans leur transformation digitale. SEO, création de sites
                web, réseaux sociaux et stratégie marketing : une approche
                complète orientée résultats.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/212675754651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-brand-black font-semibold px-7 py-4 rounded-full hover:scale-[1.03] transition-all duration-200"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Démarrer sur WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/20 text-white font-semibold px-7 py-4 rounded-full hover:border-white/40 transition-all duration-200"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Demander un devis
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <AnimateOnScroll>
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Nos services de marketing digital
                <span className="text-brand-gold"> à Marrakech.</span>
              </h2>
              <p className="text-brand-gray max-w-2xl">
                Une offre complète pour couvrir tous vos besoins digitaux et
                accélérer votre croissance sur le marché marocain.
              </p>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.07}>
                <Link
                  href={s.href}
                  className="group p-7 rounded-2xl border border-brand-border bg-brand-black hover:border-brand-gold/30 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-5 group-hover:bg-brand-gold/20 transition-colors">
                    {s.icon}
                  </div>
                  <h3
                    className="text-brand-offwhite font-semibold text-base mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed flex-1">
                    {s.description}
                  </p>
                  <span className="mt-4 text-brand-gold text-sm font-medium group-hover:underline">
                    En savoir plus →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <AnimateOnScroll>
              <h2
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-brand-offwhite mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Pourquoi choisir Genius Marketing
                <span className="text-brand-gold"> ?</span>
              </h2>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 0.1}>
                <div
                  className="p-8 rounded-2xl border border-brand-border"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-xl mb-5"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-brand-offwhite font-semibold text-base mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
              {stats.map((stat, i) => (
                <AnimateOnScroll key={stat.label} delay={i * 0.08}>
                  <div
                    className={`px-8 py-8 text-center lg:text-left ${
                      i < 2 ? "border-b border-white/10 lg:border-b-0" : ""
                    }`}
                  >
                    <div
                      className="font-bold text-white mb-1"
                      style={{
                        fontSize: "clamp(2rem,4vw,3rem)",
                        fontFamily: "var(--font-syne)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <AnimateOnScroll>
            <h2
              className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold text-brand-offwhite mb-12 text-center"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Questions fréquentes
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={faq.q} delay={i * 0.07}>
                <div
                  className="rounded-xl p-6 border border-brand-border"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <h3
                    className="text-brand-offwhite font-semibold text-base mb-3"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, #3a3f8a 0%, #282B59 80%)",
        }}
      >
        <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <AnimateOnScroll>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Prêt à développer votre présence digitale à Marrakech ?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-white/50 text-lg mb-10">
              Consultation gratuite — réponse garantie en 24h.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <a
              href="https://wa.me/212675754651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-black font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
              style={{
                fontFamily: "var(--font-syne)",
                boxShadow: "0 0 30px rgba(255,255,255,0.12)",
              }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Démarrer sur WhatsApp
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
