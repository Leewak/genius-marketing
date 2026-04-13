import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TickerBand } from "@/components/sections/TickerBand";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { TeamTeaser } from "@/components/sections/TeamTeaser";
import { CTASection } from "@/components/sections/CTASection";
import { BlogTeaser } from "@/components/sections/BlogTeaser";

export const metadata: Metadata = {
  title: "Agence Marketing Digital à Marrakech | Genius Marketing",
  description:
    "Genius Marketing, votre agence digitale à Marrakech. Création de sites web professionnels, SEO, stratégie marketing et branding pour développer votre entreprise au Maroc.",
  alternates: { canonical: "https://geniusmarketing.ma" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://geniusmarketing.ma",
  name: "Genius Marketing",
  description:
    "Agence de marketing digital à Marrakech spécialisée en création de sites web, SEO, design UX et stratégie marketing.",
  url: "https://geniusmarketing.ma",
  telephone: "+212675754651",
  email: "contact@geniusmarketing.ma",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.6295",
    longitude: "-7.9811",
  },
  sameAs: [
    "https://instagram.com/geniusmarketing.ma",
    "https://facebook.com/geniusmarketing.ma",
    "https://linkedin.com/company/geniusmarketing-ma",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2000",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  currenciesAccepted: "MAD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  areaServed: ["Marrakech", "Casablanca", "Rabat", "Maroc"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Marketing Digital",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Création Site Web",
          description: "Sites vitrines, e-commerce, WordPress et SEO on-page",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Marketing Digital",
          description: "Référencement naturel, Google Ads, Social Ads et Analytics",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Design Web & UX",
          description: "UX Research, wireframes et design responsive",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stratégie Marketing",
          description: "Étude de marché, tunnel de conversion et plan marketing",
        },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TickerBand />
      <About />
      <ServicesGrid />
      <Benefits />
      <Process />
      <TeamTeaser />
      <CTASection />
      <BlogTeaser />
    </>
  );
}
