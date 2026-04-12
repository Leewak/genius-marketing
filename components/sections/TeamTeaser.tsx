import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const avatars = [
  { src: "/images/team/chaymae.webp", name: "Chaymae" },
  { src: "/images/team/hanae.webp", name: "Hanae" },
  { src: "/images/team/yassmine.webp", name: "Yassmine" },
  { src: "/images/team/khalid.webp", name: "Khalid" },
];

export function TeamTeaser() {
  return (
    <section className="bg-brand-black py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.02)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left — text */}
          <div>
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
                className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Des experts passionnés
                <br />
                par votre succès.
              </h2>
            </AnimateOnScroll>
          </div>

          {/* Right — avatars + button */}
          <AnimateOnScroll delay={0.2} direction="left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Overlapping avatar circles */}
              <div className="flex items-center">
                {avatars.map((avatar, i) => (
                  <div
                    key={avatar.name}
                    className="relative w-14 h-14 rounded-full overflow-hidden border-2"
                    style={{
                      marginLeft: i > 0 ? "-14px" : "0",
                      zIndex: avatars.length - i,
                      borderColor: "#1e2147",
                    }}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.name}
                      fill
                      sizes="56px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
                <span className="ml-4 text-white/50 text-sm">
                  4 experts
                </span>
              </div>

              {/* CTA */}
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:border-white/50 hover:text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 group shrink-0"
              >
                Rencontrer l&apos;équipe
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
