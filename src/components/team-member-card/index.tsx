"use client";

import Image from "next/image";
import "./style.scss";

type TeamMemberCardProps = {
  name: string;
  alt: string;
};

export default function TeamMemberCard({ name, alt }: TeamMemberCardProps) {
  return (
    <li className="team-member-card">
      <Image
        alt={alt}
        src={`/images/team/${name}.webp`}
        aria-label={`imagem membro da equipe: ${name}`}
        className="team-member-card-image"
        loading="lazy"
        quality={100}
        fill
      />
    </li>
  );
}
