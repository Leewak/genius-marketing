"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const services = [
  {
    href: "/services/creation-site-web",
    number: "01",
    title: "Création Site Web",
    description:
      "Sites vitrines, e-commerce, WordPress & SEO on-page. Des sites performants qui convertissent vos visiteurs en clients.",
    tags: ["Vitrine", "E-Commerce", "WordPress", "SEO On-page"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "Référencement naturel, Google Ads, Social Ads & Analytics. Soyez visible là où vos clients vous cherchent.",
    tags: ["SEO", "Google Ads", "Social Ads", "Analytics"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
        <path d="M13.5 7.5L15 6M15.5 11H17M13.5 14.5L15 16"/>
      </svg>
    ),
  },
  {
    href: "/services/design-ux",
    number: "03",
    title: "Design Web & UX",
    description:
      "UX Research, wireframes et design responsive. Des interfaces intuitives qui enchantent vos utilisateurs.",
    tags: ["UX Research", "Wireframes", "UI Design", "Responsive"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      "Étude de marché, tunnel de conversion & plan marketing. Une vision claire pour une croissance durable.",
    tags: ["Étude de marché", "Tunnel de conversion", "Plan marketing"],
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#282B59" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <AnimateOnScroll>
              <span
                className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Nos Services
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-brand-offwhite"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Tout ce dont votre marque
                <br />
                <span className="text-brand-gold">a besoin</span> pour croître.
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.2}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-offwhite/60 text-sm border border-brand-border px-5 py-3 rounded-full hover:border-brand-gold/40 hover:text-brand-offwhite transition-all duration-200 shrink-0 group"
            >
              Tous les services
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.href} delay={i * 0.08}>
              <ServiceCard service={service} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <Link
        href={service.href}
        className="group block h-full p-8 rounded-2xl transition-all duration-300 relative overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        {/* Hover — border highlight + top gradient */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            border: "1px solid rgba(255,255,255,0.4)",
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10">
          {/* Number + Icon */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-brand-gold/30 text-4xl font-bold font-mono leading-none"
              style={{ fontFamily: "var(--font-syne)" }}>
              {service.number}
            </span>
            <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/20 transition-colors duration-300">
              {service.icon}
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-brand-offwhite text-xl font-bold mb-3 group-hover:text-brand-gold transition-colors duration-300"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-brand-gray text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-brand-offwhite/50 border border-brand-border px-3 py-1 rounded-full group-hover:border-brand-gold/20 group-hover:text-brand-gold/70 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-brand-gold text-sm font-medium">
            En savoir plus
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-2 duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
