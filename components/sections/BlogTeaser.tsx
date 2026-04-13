import Link from "next/link";
import Image from "next/image";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { posts } from "@/lib/blog";

export function BlogTeaser() {
  return (
    <section className="bg-brand-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <AnimateOnScroll>
              <span
                className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Blog &amp; Ressources
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <h2
                className="text-[clamp(2rem,4vw,2.8rem)] font-bold leading-tight tracking-tight text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Nos derniers articles
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll delay={0.15}>
            <Link
              href="/blog"
              className="text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0"
            >
              Voir tous les articles →
            </Link>
          </AnimateOnScroll>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {posts.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div
                  className="flex items-center gap-5 p-5 rounded-2xl border border-white/[0.08] group-hover:border-white/[0.18] transition-all duration-300 group-hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Thumbnail */}
                  <div style={{ position: "relative", width: "80px", height: "80px", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-white/50 text-[0.7rem] font-medium uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontFamily: "var(--font-syne)",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <h3
                      className="text-white font-semibold leading-snug mb-1 truncate"
                      style={{ fontFamily: "var(--font-syne)", fontSize: "0.95rem" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-white/40 truncate"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="text-white/40 group-hover:text-white/70 transition-colors duration-200 text-sm shrink-0 hidden sm:block">
                    Lire →
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-sm font-medium px-6 py-3 rounded-full transition-all duration-200"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Voir tous les articles →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
