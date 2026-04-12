"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="flex items-center gap-6 border border-white/[0.12] hover:border-white/25 transition-all duration-300 rounded-2xl p-6"
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Photo */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: "100px", height: "120px", borderRadius: "10px" }}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="100px"
          className="object-cover object-top"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-white font-bold mb-1"
          style={{ fontFamily: "var(--font-syne)", fontSize: "1.1rem" }}
        >
          {member.name}
        </h3>
        <p
          className="mb-2"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {member.role}
        </p>
        <p
          style={{
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.45)",
            lineHeight: "1.6",
          }}
        >
          {member.description}
        </p>
      </div>
    </motion.div>
  );
}
