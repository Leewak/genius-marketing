"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { value: "90%", label: "Taux de satisfaction" },
  { value: "2000+", label: "Projets réalisés" },
  { value: "98%", label: "Taux de rétention" },
  { value: "1M+", label: "Audience digitale" },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg/agency9-home-bg1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* bg1 overlay — screen blend */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/bg/agency9-home-bg1-overlay.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      {/* bg2 — sphere visual, right side (desktop only) */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          width: "55%",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <Image
          src="/images/bg/agency9-home-bg2.webp"
          alt=""
          width={1000}
          height={1000}
          className="w-full h-auto"
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" style={{ zIndex: 3 }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ zIndex: 4 }} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-20 w-full" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            {/* Eyebrow */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Agence Digitale — Marrakech, Maroc
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[clamp(2.2rem,10vw,5.5rem)] leading-[1.05] font-bold tracking-tight mb-8 text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Nous propulsons
              <br />
              votre entreprise
              <br />
              vers de nouveaux sommets.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-brand-gray text-lg sm:text-xl leading-relaxed max-w-xl mb-10"
            >
              Création de sites web, SEO, design UX et stratégie marketing —
              nous donnons à votre marque la présence digitale qu&apos;elle mérite.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href="https://wa.me/212675754651"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-black font-semibold text-base px-7 py-4 rounded-full hover:bg-brand-gold-light transition-all duration-200 hover:shadow-[0_0_32px_rgba(255,255,255,0.25)] w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-black font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] w-full sm:w-auto group"
                style={{ fontFamily: "var(--font-syne)", boxShadow: "0 0 30px rgba(255,255,255,0.15)" }}
              >
                Demander un devis
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — spacer for desktop layout (bg2 is absolute) */}
          <div className="hidden lg:block" />
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mt-16"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={item}
                  className={`px-8 py-6 text-center lg:text-left ${
                    i < 2 ? "border-b border-white/10 lg:border-b-0" : ""
                  }`}
                >
                  <div
                    className="font-bold text-white mb-1"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      fontFamily: "var(--font-syne)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #1e2147, transparent)", zIndex: 10 }}
      />
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
