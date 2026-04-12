import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

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
  title: {
    default: "Genius Marketing — Agence Digitale à Marrakech",
    template: "%s | Genius Marketing",
  },
  description:
    "Genius Marketing, agence de marketing digital à Marrakech. Création de sites web, SEO, design UX et stratégie marketing pour propulser votre entreprise.",
  keywords: [
    "agence marketing digital Marrakech",
    "création site web Maroc",
    "SEO Marrakech",
    "marketing digital Maroc",
    "design web Marrakech",
  ],
  authors: [{ name: "Genius Marketing" }],
  creator: "Genius Marketing",
  metadataBase: new URL("https://geniusmarketing.ma"),
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://geniusmarketing.ma",
    siteName: "Genius Marketing",
    title: "Genius Marketing — Agence Digitale à Marrakech",
    description:
      "Agence de marketing digital à Marrakech spécialisée en création de sites web, SEO, design UX et stratégie marketing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Genius Marketing — Agence Digitale Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genius Marketing — Agence Digitale à Marrakech",
    description:
      "Agence de marketing digital à Marrakech. Création de sites web, SEO, design UX et stratégie marketing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="bg-brand-black text-brand-offwhite antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
