"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const GLOW_COLORS: Record<string, string> = {
  Chaymae: "rgba(120, 100, 255, 0.35)",
  Hanae: "rgba(80, 140, 255, 0.35)",
  Yassmine: "rgba(100, 180, 255, 0.35)",
  Khalid: "rgba(60, 100, 220, 0.35)",
};

const DEFAULT_GLOW = "rgba(100, 120, 255, 0.35)";

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
}

export function TeamCard({ member }: { member: TeamMember }) {
  const glowColor = GLOW_COLORS[member.name] ?? DEFAULT_GLOW;

  return (
    <motion.div
      whileHover={{
        y: -4,
        backgroundColor: "rgba(255,255,255,0.09)",
        borderColor: "rgba(255,255,255,0.2)",
        boxShadow:
          "0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
      transition={{ duration: 0.3, ease: EASE }}
      className="flex items-center gap-6 rounded-[20px] p-6"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Photo with glow */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        {/* Glow layer */}
        <div
          style={{
            position: "absolute",
            inset: "-8px",
            borderRadius: "18px",
            background: `radial-gradient(circle, ${glowColor} 0%, rgba(40,43,89,0) 70%)`,
            filter: "blur(12px)",
            zIndex: 0,
          }}
        />
        {/* Photo */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "130px",
            height: "160px",
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="130px"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0" style={{ position: "relative", zIndex: 1 }}>
        <h3
          className="text-white"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "1.15rem",
            marginBottom: "0.2rem",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.6rem",
          }}
        >
          {member.role}
        </p>
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: "1.65",
          }}
        >
          {member.description}
        </p>
      </div>
    </motion.div>
  );
}
