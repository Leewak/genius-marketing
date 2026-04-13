import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Genius Marketing`,
    description: post.excerpt,
    alternates: { canonical: `https://geniusmarketing.ma/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      {/* Back + hero */}
      <section
        className="relative pt-36 pb-16 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #3a3f8a 0%, #282B59 70%)" }}
      >
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 mb-10"
          >
            ← Retour au blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
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
          </div>

          <h1
            className="text-white font-bold leading-tight tracking-tight"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article image */}
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div style={{ position: "relative", width: "100%", height: "420px", borderRadius: "16px", overflow: "hidden", marginBottom: "3rem" }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      </div>

      {/* Article body */}
      <section className="bg-brand-black py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <ArticleContent content={post.content} />

          {/* CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center"
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
      </section>
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
      elements.push(
        <h2
          key={key++}
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "white",
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          {line.slice(3)}
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
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
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
