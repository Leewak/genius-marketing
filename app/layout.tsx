import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { LocalBusinessSchema } from "@/components/SchemaOrg";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geniusmarketing.ma"),
  title: {
    default: "Genius Marketing – Agence Marketing Digital à Marrakech",
    template: "%s | Genius Marketing Marrakech",
  },
  description:
    "Genius Marketing, agence de marketing digital à Marrakech. Création de sites web, SEO, branding et réseaux sociaux. Stratégies orientées ROI pour entreprises au Maroc et à l'international.",
  keywords: [
    "agence marketing digital marrakech",
    "création site web marrakech",
    "seo marrakech",
    "agence digitale maroc",
    "marketing digital maroc",
  ],
  authors: [{ name: "Genius Marketing", url: "https://geniusmarketing.ma" }],
  creator: "Genius Marketing",
  publisher: "Genius Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://geniusmarketing.ma",
    siteName: "Genius Marketing",
    title: "Genius Marketing – Agence Marketing Digital à Marrakech",
    description:
      "Agence de marketing digital à Marrakech. Création de sites web, SEO, branding et réseaux sociaux.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Genius Marketing Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genius Marketing – Agence Marketing Digital à Marrakech",
    description:
      "Agence de marketing digital à Marrakech spécialisée en création de sites web et SEO.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://geniusmarketing.ma",
  },
  verification: {
    google: "rX3EH_6Eyq10UaBdz_oGNJ3ZLoPuNAv2NxdOWVeuGDs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-brand-black text-brand-offwhite antialiased">
        <LocalBusinessSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
