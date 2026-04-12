import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Demander un Devis Gratuit",
  description:
    "Contactez Genius Marketing à Marrakech. Demandez un devis gratuit pour votre projet web, SEO ou stratégie marketing. Réponse en 24h.",
  alternates: { canonical: "https://geniusmarketing.ma/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg/agency9-contact-bg1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-brand-black/85 pointer-events-none" />
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
          <AnimateOnScroll>
            <span
              className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-6 block"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Contactez-Nous
            </span>
          </AnimateOnScroll>
          <div className="max-w-4xl">
            <AnimateOnScroll delay={0.1}>
              <h1
                className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight text-brand-offwhite mb-6"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Parlons de
                <br />
                <span className="text-brand-gold">votre projet.</span>
              </h1>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-brand-gray text-xl leading-relaxed max-w-2xl">
                Prêt à transformer votre présence digitale ? Contactez-nous —
                première consultation gratuite, réponse garantie en 24h.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <ContactForm />
    </>
  );
}
