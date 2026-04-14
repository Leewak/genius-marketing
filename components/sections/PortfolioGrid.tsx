"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/portfolio";

const ALL_TABS = ["Tous", "E-Commerce", "Site Vitrine", "Branding", "SEO"];

export function PortfolioGrid() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter(
          (p) =>
            p.category === active ||
            p.tags.some((t) => t.toLowerCase().includes(active.toLowerCase()))
        );

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {ALL_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={
              active === tab
                ? {
                    background: "white",
                    color: "#282B59",
                    border: "1px solid white",
                    fontFamily: "var(--font-syne)",
                  }
                : {
                    background: "transparent",
                    color: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "var(--font-syne)",
                  }
            }
            className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200"
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          position: "relative",
          height: "280px",
          borderRadius: "16px 16px 0 0",
          background: `linear-gradient(135deg, ${project.placeholder.from} 0%, ${project.placeholder.to} 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-20" />

        {/* Client name watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="text-white/15 font-bold"
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.client}
          </span>
        </div>

        {/* Hover overlay — slides up */}
        <div
          className="absolute inset-x-0 bottom-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          style={{
            height: "100%",
            background: "rgba(40,43,89,0.85)",
          }}
        >
          <span
            className="text-white font-semibold text-sm border border-white/30 px-5 py-2.5 rounded-full"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Voir le projet
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <span
          className="text-[0.65rem] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 inline-block"
          style={{
            color: "rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            fontFamily: "var(--font-syne)",
          }}
        >
          {project.category}
        </span>
        <h3
          className="text-white font-bold mb-2"
          style={{ fontFamily: "var(--font-syne)", fontSize: "1.2rem" }}
        >
          {project.client}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                color: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
