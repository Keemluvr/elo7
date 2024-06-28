"use client";

import Image from "next/image";
import "./style.scss";

type TeamMemberCardProps = {
  name: string;
  alt: string;
};

export default function TeamMemberCard({ name, alt }: TeamMemberCardProps) {
  return (
    <div className="team-member-card">
      <Image
        alt={alt}
        src={`/images/team/${name}.webp`}
        className="team-member-card-image"
        loading="lazy"
        quality={100}
        fill
      />
    </div>
  );
}
