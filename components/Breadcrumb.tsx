import Link from "next/link";

type BreadcrumbItem = { name: string; url: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: item.url,
            })),
          }),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-sm mb-8"
      >
        {items.map((item, i) => (
          <span key={item.url} className="flex items-center gap-1.5">
            {i > 0 && (
              <span className="text-white/20 select-none">›</span>
            )}
            {i === items.length - 1 ? (
              <span className="text-white/50">{item.name}</span>
            ) : (
              <Link
                href={item.url}
                className="text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
