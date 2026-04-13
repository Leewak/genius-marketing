import type { Metadata } from "next";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Ressources — Genius Marketing",
  description:
    "Conseils d'experts en marketing digital, SEO et création web pour développer votre présence digitale à Marrakech et au Maroc.",
  alternates: { canonical: "https://geniusmarketing.ma/blog" },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
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
              Blog &amp; Ressources
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h1
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight tracking-tight text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Insights &amp; Stratégies Digitales
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Conseils d&apos;experts pour développer votre présence digitale
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-brand-black py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article
                    className="h-full flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] group-hover:border-white/20 transition-all duration-300 group-hover:-translate-y-1.5"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    {/* Image placeholder */}
                    <div
                      className="relative flex-shrink-0"
                      style={{
                        height: "220px",
                        background: "linear-gradient(135deg, #1e2147 0%, #282B59 100%)",
                        borderRadius: "16px 16px 0 0",
                      }}
                    >
                      <span
                        className="absolute top-4 left-4 text-white/60 text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontFamily: "var(--font-syne)",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span>{post.readTime} de lecture</span>
                      </div>
                      <h2
                        className="text-white font-bold mb-3 leading-snug"
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontSize: "1.1rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-white/50 flex-1 mb-5"
                        style={{
                          fontSize: "0.85rem",
                          lineHeight: "1.65",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-200">
                        Lire l&apos;article →
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
