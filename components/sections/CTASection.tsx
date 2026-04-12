import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg/agency9-home-bg5.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,33,71,0.93) 0%, rgba(40,43,89,0.88) 50%, rgba(30,33,71,0.93) 100%)",
        }}
      />
      {/* Large central blurred circle */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.03)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid dots */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <AnimateOnScroll>
          <span
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-8"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Prêt à passer à l&apos;action ?
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Propulsons votre entreprise
            <br />
            ensemble.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <p className="text-brand-gray text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Rejoignez plus de 2000 entreprises qui nous font confiance. Discutons
            de votre projet — consultation gratuite, sans engagement.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — white bg, navy text */}
            <a
              href="https://wa.me/212675754651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-black font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] group w-full sm:w-auto justify-center"
              style={{
                fontFamily: "var(--font-syne)",
                boxShadow: "0 0 30px rgba(255,255,255,0.12)",
              }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Démarrer sur WhatsApp
            </a>

            {/* Secondary — outline white */}
            <a
              href="mailto:contact@geniusmarketing.ma"
              className="inline-flex items-center gap-2 text-white font-medium text-base px-8 py-4 rounded-full border border-white/30 hover:border-white/70 transition-all duration-200 group w-full sm:w-auto justify-center"
            >
              <EmailIcon className="w-5 h-5" />
              contact@geniusmarketing.ma
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <div
            className="mt-12 pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/40 text-sm"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-2">
              <CheckIcon />
              Consultation gratuite
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              Réponse en 24h
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon />
              Sans engagement
            </div>
          </div>
        </AnimateOnScroll>
      </div>
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

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
