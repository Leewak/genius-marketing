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
    illustration: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <rect x="4" y="8" width="40" height="8" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        <circle cx="11" cy="12" r="2" fill="rgba(255,255,255,0.4)"/>
        <circle cx="18" cy="12" r="2" fill="rgba(255,255,255,0.25)"/>
        <circle cx="25" cy="12" r="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="10" y="22" width="12" height="1.5" rx="1" fill="rgba(255,255,255,0.3)"/>
        <rect x="10" y="26" width="20" height="1.5" rx="1" fill="rgba(255,255,255,0.2)"/>
        <rect x="10" y="30" width="16" height="1.5" rx="1" fill="rgba(255,255,255,0.15)"/>
        <rect x="28" y="22" width="12" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
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
    illustration: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <polyline points="6,36 16,24 24,28 34,14 42,18" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
        <polyline points="6,36 16,24 24,28 34,14 42,18" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
        <circle cx="16" cy="24" r="3" fill="rgba(255,255,255,0.3)"/>
        <circle cx="24" cy="28" r="3" fill="rgba(255,255,255,0.3)"/>
        <circle cx="34" cy="14" r="3" fill="rgba(255,255,255,0.5)"/>
        <circle cx="42" cy="18" r="3" fill="rgba(255,255,255,0.3)"/>
        <rect x="30" y="10" width="16" height="8" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <line x1="6" y1="38" x2="42" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        <line x1="6" y1="12" x2="6" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
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
    illustration: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" rx="8" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)"/>
        <circle cx="24" cy="20" r="7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="rgba(255,255,255,0.05)"/>
        <circle cx="24" cy="20" r="3" fill="rgba(255,255,255,0.25)"/>
        <line x1="24" y1="6" x2="24" y2="13" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <line x1="24" y1="27" x2="24" y2="34" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <line x1="6" y1="20" x2="13" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <line x1="35" y1="20" x2="42" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <rect x="10" y="34" width="8" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
        <rect x="20" y="34" width="8" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
        <rect x="30" y="34" width="8" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>
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
    illustration: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="12" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
        <circle cx="24" cy="24" r="2" fill="rgba(255,255,255,0.6)"/>
        <line x1="24" y1="6" x2="24" y2="42" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <line x1="6" y1="24" x2="42" y2="24" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <circle cx="24" cy="12" r="2.5" fill="rgba(255,255,255,0.35)"/>
        <circle cx="36" cy="24" r="2.5" fill="rgba(255,255,255,0.25)"/>
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
          {/* Number */}
          <span
            className="text-brand-gold/30 text-4xl font-bold font-mono leading-none block mb-5"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {service.number}
          </span>

          {/* SVG Illustration */}
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.25rem",
            }}
          >
            {service.illustration}
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
