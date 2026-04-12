const items = [
  "Création Site Web",
  "SEO & Référencement",
  "Google Ads",
  "Social Media",
  "Design UX/UI",
  "Stratégie Digitale",
  "E-Commerce",
  "Branding",
  "Analytics & Data",
  "Marketing de Contenu",
];

export function TickerBand() {
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 select-none"
      style={{ background: "rgba(255,255,255,0.08)" }}
    >
      <div className="flex items-center animate-marquee whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-2"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span
              className="text-white font-semibold uppercase"
              style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}
            >
              {item}
            </span>
            <span className="text-white/40 text-base">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
