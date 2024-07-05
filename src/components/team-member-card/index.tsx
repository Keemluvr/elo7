import Image from "next/image";
import getLocalBase64 from "@/lib/getLocalBase64";
import "./style.scss";

type TeamMemberCardProps = {
  name: string;
  alt: string;
};

export default async function TeamMemberCard({
  name,
  alt,
}: TeamMemberCardProps) {
  const memberImage = `/images/team/${name}.webp`;
  const memberImageBlurDataURL = await getLocalBase64(memberImage);

  return (
    <li className="team-member-card">
      <Image
        src={memberImage}
        blurDataURL={memberImageBlurDataURL}
        alt={alt}
        placeholder="blur"
        aria-label={`imagem membro da equipe: ${name}`}
        className="team-member-card-image"
        loading="lazy"
        quality={100}
        fill
      />
    </li>
  );
}
