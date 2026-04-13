import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Genius Marketing – Agence Marketing Digital à Marrakech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #282B59 0%, #1e2147 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 18,
            letterSpacing: "0.2em",
            marginBottom: 20,
          }}
        >
          AGENCE MARKETING DIGITAL · MARRAKECH
        </div>
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Genius Marketing
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 28,
            maxWidth: 700,
          }}
        >
          Création de sites web, SEO &amp; stratégie digitale à Marrakech
        </div>
        <div
          style={{
            marginTop: 48,
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 8,
            padding: "12px 24px",
            color: "white",
            fontSize: 18,
          }}
        >
          geniusmarketing.ma
        </div>
      </div>
    ),
    { ...size }
  );
}
