import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { TeamCard, type TeamMember } from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "À Propos — Notre Équipe & Notre Mission",
  description:
    "Découvrez l'équipe Genius Marketing : Chaymae, Hanae, Yassmine et Khalid — des experts passionnés par votre croissance digitale à Marrakech.",
  alternates: { canonical: "https://geniusmarketing.ma/a-propos" },
};

const team: TeamMember[] = [
  {
    name: "Chaymae",
    role: "Fondatrice & CEO",
    description:
      "Dirige la vision stratégique de l'agence et accompagne les entreprises dans leur croissance digitale avec une approche orientée résultats.",
    photo: "/images/team/chaymae.webp",
  },
  {
    name: "Hanae",
    role: "Chef de Projet Digital",
    description:
      "Coordonne les projets de A à Z et assure leur réussite en garantissant qualité, respect des délais et satisfaction client.",
    photo: "/images/team/hanae.webp",
  },
  {
    name: "Yassmine",
    role: "Directrice Commerciale",
    description:
      "Développe les relations clients et identifie les meilleures opportunités pour accompagner les entreprises dans leurs projets digitaux.",
    photo: "/images/team/yassmine.webp",
  },
  {
    name: "Khalid",
    role: "Développeur Full Stack & Expert SEO",
    description:
      "Conçoit des solutions digitales performantes en combinant développement web, SEO et optimisation technique.",
    photo: "/images/team/khalid.webp",
  },
];

const stats = [
  { value: "90%", label: "Taux de satisfaction" },
  { value: "2000+", label: "Projets réalisés" },
  { value: "98%", label: "Taux de rétention" },
  { value: "5+", label: "Années d'expérience" },
];

export default function AProposPage() {
  return (
    <>
      {/* a) Hero */}
      <section
        className="relative pt-40 pb-28 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #3a3f8a 0%, #282B59 70%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <AnimateOnScroll>
            <span
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white/70 text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-8"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              À Propos de Nous
            </span>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <h1
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-tight tracking-tight text-white mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Notre équipe,
              <br />
              votre croissance.
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <p className="text-white/50 text-xl leading-relaxed max-w-2xl mx-auto">
              Une agence digitale fondée à Marrakech, animée par la passion des
              résultats concrets.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* b) Mission */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed">
              Genius Marketing est née d&apos;une vision simple : les entreprises
              marocaines méritent une agence digitale à la hauteur de leurs
              ambitions — locale dans son ADN, internationale dans ses standards.
              Depuis notre création, nous accompagnons des centaines d&apos;entreprises
              à travers le Maroc en combinant créativité, technologie et stratégie
              pour générer une croissance mesurable et durable.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* c) Stats bar */}
      <section className="bg-brand-dark pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
                <AnimateOnScroll key={stat.label} delay={i * 0.08}>
                  <div
                    className={`px-8 py-6 text-center lg:text-left ${
                      i < 2 ? "border-b border-white/10 lg:border-b-0" : ""
                    }`}
                  >
                    <div
                      className="font-bold text-white mb-1"
                      style={{
                        fontSize: "clamp(2.2rem,4vw,3.5rem)",
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

      {/* d) Team grid */}
      <section className="bg-brand-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimateOnScroll>
              <span
                className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Notre Équipe
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight tracking-tight text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Les visages derrière
                <br />
                <span className="text-brand-gold">votre succès.</span>
              </h2>
            </AnimateOnScroll>
          </div>

          {/* 2×2 grid on desktop, 1 col on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <TeamCard member={member} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* e) CTA */}
      <section
        className="py-24 lg:py-32 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e2147 0%, #282B59 50%, #1e2147 100%)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <AnimateOnScroll>
            <h2
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Travaillons ensemble.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="text-white/50 text-lg mb-10">
              Discutons de votre projet — consultation gratuite, sans engagement.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <a
              href="https://wa.me/212675754651"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-brand-black font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
              style={{ fontFamily: "var(--font-syne)", boxShadow: "0 0 30px rgba(255,255,255,0.12)" }}
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
