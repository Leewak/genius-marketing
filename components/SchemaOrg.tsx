import type { Post } from "@/lib/blog";

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MarketingAgency",
          name: "Genius Marketing",
          description:
            "Agence de marketing digital à Marrakech spécialisée en création de sites web, SEO, branding et stratégie digitale.",
          url: "https://geniusmarketing.ma",
          logo: "https://geniusmarketing.ma/images/logo-gm.webp",
          image: "https://geniusmarketing.ma/og-image.jpg",
          telephone: "+212675754651",
          email: "contact@geniusmarketing.ma",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Marrakech",
            addressLocality: "Marrakech",
            addressRegion: "Marrakech-Safi",
            addressCountry: "MA",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "31.6295",
            longitude: "-7.9811",
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          sameAs: [
            "https://www.facebook.com/geniusmarketing.ma",
            "https://www.instagram.com/geniusmarketing.ma",
            "https://www.linkedin.com/company/genius-marketing-ma",
          ],
          priceRange: "$$",
          areaServed: ["Marrakech", "Casablanca", "Rabat", "Maroc"],
          serviceArea: { "@type": "Place", name: "Maroc" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services Marketing Digital",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Création Site Web Marrakech",
                  description:
                    "Création de sites web professionnels, vitrines et e-commerce à Marrakech",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO Marrakech",
                  description:
                    "Référencement naturel et marketing digital pour les entreprises marocaines",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Stratégie Marketing Digital",
                  description:
                    "Stratégie marketing digital complète orientée ROI",
                },
              },
            ],
          },
        }),
      }}
    />
  );
}

export function BlogPostSchema({ post }: { post: Post }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `https://geniusmarketing.ma${post.image}`,
          author: {
            "@type": "Organization",
            name: "Genius Marketing",
            url: "https://geniusmarketing.ma",
          },
          publisher: {
            "@type": "Organization",
            name: "Genius Marketing",
            logo: {
              "@type": "ImageObject",
              url: "https://geniusmarketing.ma/images/logo-gm.webp",
            },
          },
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://geniusmarketing.ma/blog/${post.slug}`,
          },
          url: `https://geniusmarketing.ma/blog/${post.slug}`,
          keywords: post.tags?.join(", ") ?? post.title,
          articleSection: post.category,
          inLanguage: "fr-MA",
        }),
      }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }),
      }}
    />
  );
}
