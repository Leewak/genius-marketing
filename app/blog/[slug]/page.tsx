import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";
import { BlogPostSchema } from "@/components/SchemaOrg";
import { Breadcrumb } from "@/components/Breadcrumb";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle
      ? `${post.metaTitle} | Genius Marketing Marrakech`
      : `${post.title} | Genius Marketing Marrakech`,
    description: post.metaDescription ?? post.excerpt,
    alternates: { canonical: `https://geniusmarketing.ma/blog/${post.slug}` },
    keywords: post.tags,
  };
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getH2Headings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.slice(3).trim();
      return { text, id: slugify(text) };
    });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const headings = getH2Headings(post.content);
  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <BlogPostSchema post={post} />

      {/* CSS-only reading progress bar */}
      <style>{`
        @keyframes rp { to { transform: scaleX(1); } }
        @supports (animation-timeline: scroll()) {
          .rp-bar {
            transform: scaleX(0);
            transform-origin: left;
            animation: rp linear both;
            animation-timeline: scroll();
          }
        }
      `}</style>
      <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-white/5 pointer-events-none">
        <div className="rp-bar h-full bg-brand-gold" style={{ width: "100%" }} />
      </div>

      {/* Hero */}
      <section
        className="relative pt-36 pb-14 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #3a3f8a 0%, #282B59 70%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
          <Breadcrumb
            items={[
              { name: "Accueil", url: "https://geniusmarketing.ma" },
              { name: "Blog", url: "https://geniusmarketing.ma/blog" },
              {
                name: post.title.slice(0, 50) + (post.title.length > 50 ? "…" : ""),
                url: `https://geniusmarketing.ma/blog/${post.slug}`,
              },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-white/60 text-xs font-medium uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontFamily: "var(--font-syne)",
              }}
            >
              {post.category}
            </span>
            <span className="text-white/40 text-xs">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="text-white/40 text-xs">{post.readTime} de lecture</span>
            {post.wordCount && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-white/40 text-xs">~{post.wordCount} mots</span>
              </>
            )}
          </div>

          <h1
            className="text-white font-bold leading-tight tracking-tight mb-6"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            {post.title}
          </h1>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-white/40 text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article image */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-10">
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "420px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      </div>

      {/* Article body + TOC */}
      <section className="bg-brand-black py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">

            {/* TOC sidebar (desktop) */}
            {headings.length > 0 && (
              <aside className="hidden lg:block w-56 shrink-0">
                <div className="sticky top-28">
                  <p
                    className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-4"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    Sommaire
                  </p>
                  <nav className="flex flex-col gap-2">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="text-white/40 hover:text-white/80 text-xs leading-snug transition-colors duration-200"
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Article content */}
            <div className="flex-1 min-w-0">
              <ArticleContent content={post.content} />

              {/* CTA */}
              <div
                className="mt-14 rounded-2xl p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h2
                  className="text-white font-bold mb-3 text-xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Prêt à développer votre présence digitale ?
                </h2>
                <p className="text-white/50 text-sm mb-6">
                  Consultation gratuite — réponse garantie en 24h.
                </p>
                <a
                  href="https://wa.me/212675754651"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-brand-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Démarrer sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-brand-black pb-20 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-14">
            <h2
              className="text-white font-bold mb-8"
              style={{ fontFamily: "var(--font-syne)", fontSize: "1.25rem" }}
            >
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-4 p-4 rounded-xl border border-white/[0.08] hover:border-white/20 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "70px",
                      height: "64px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-white/30 text-[0.7rem] uppercase tracking-widest mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {related.category}
                    </p>
                    <p
                      className="text-white/80 text-sm font-medium leading-snug group-hover:text-white transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {related.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ArticleContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.startsWith("## ")) {
      const text = line.slice(3);
      const id = slugify(text);
      elements.push(
        <h2
          key={key++}
          id={id}
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "white",
            marginTop: "2.5rem",
            marginBottom: "1rem",
            scrollMarginTop: "7rem",
          }}
        >
          {text}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "white",
            marginTop: "1.75rem",
            marginBottom: "0.75rem",
          }}
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li
          key={key++}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "1rem",
            lineHeight: "1.8",
            marginLeft: "1.25rem",
            listStyleType: "disc",
          }}
        >
          <InlineContent text={line.slice(2)} />
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} style={{ height: "0.5rem" }} />);
    } else {
      elements.push(
        <p
          key={key++}
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "1rem",
            lineHeight: "1.8",
            marginBottom: "0.25rem",
          }}
        >
          <InlineContent text={line} />
        </p>
      );
    }
  }

  return <div>{elements}</div>;
}

function InlineContent({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} style={{ color: "white", fontWeight: 700 }}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          return (
            <Link
              key={i}
              href={linkMatch[2]}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                textDecorationColor: "rgba(255,255,255,0.3)",
              }}
            >
              {linkMatch[1]}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
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
