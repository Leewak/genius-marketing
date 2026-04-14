export const projects = [
  {
    id: 1,
    client: "Mulaem",
    slug: "mulaem",
    category: "E-Commerce",
    tags: ["Création Web", "SEO", "Branding"],
    description:
      "Boutique en ligne de mode artisanale marocaine. Design moderne et expérience d'achat optimisée.",
    image: "/images/portfolio/mulaem.jpg",
    placeholder: { from: "#1a1d6e", to: "#282B59" },
    featured: true,
  },
  {
    id: 2,
    client: "Semolate",
    slug: "semolate",
    category: "Site Vitrine",
    tags: ["Création Web", "Design UX"],
    description:
      "Site vitrine premium pour une marque agroalimentaire marocaine haut de gamme.",
    image: "/images/portfolio/semolate.jpg",
    placeholder: { from: "#0d3b6e", to: "#1a2f6e" },
    featured: true,
  },
  {
    id: 3,
    client: "Al Andalus Sweets",
    slug: "al-andalus-sweets",
    category: "E-Commerce",
    tags: ["Création Web", "SEO", "Marketing Digital"],
    description:
      "Plateforme e-commerce pour une pâtisserie orientale traditionnelle avec livraison en ligne.",
    image: "/images/portfolio/al-andalus.jpg",
    placeholder: { from: "#2d1f6e", to: "#3a1f7a" },
    featured: true,
  },
  {
    id: 4,
    client: "Ocean Events",
    slug: "ocean-events",
    category: "Site Vitrine",
    tags: ["Création Web", "Design UX", "Branding"],
    description:
      "Site vitrine élégant pour une agence événementielle basée à Marrakech.",
    image: "/images/portfolio/ocean-events.jpg",
    placeholder: { from: "#0d4b6e", to: "#1a3f6e" },
    featured: true,
  },
];

export type Project = (typeof projects)[0];
