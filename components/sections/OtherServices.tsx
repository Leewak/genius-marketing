import Link from "next/link";

const allServices = [
  {
    href: "/services/creation-site-web",
    label: "Création de site web à Marrakech",
  },
  {
    href: "/services/seo-marketing",
    label: "Référencement SEO à Marrakech",
  },
  {
    href: "/services/design-ux",
    label: "Design web et UX",
  },
  {
    href: "/services/strategie-marketing",
    label: "Stratégie marketing digital",
  },
];

export function OtherServices({ current }: { current: string }) {
  const others = allServices.filter((s) => s.href !== current);
  return (
    <section
      className="py-14 border-t"
      style={{ borderColor: "rgba(255,255,255,0.08)", background: "#1e2147" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p
          className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Nos autres services
        </p>
        <div className="flex flex-wrap gap-3">
          {others.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white border border-white/10 hover:border-white/30 text-sm px-5 py-2.5 rounded-full transition-all duration-200"
            >
              {s.label}
              <span className="text-white/30">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
