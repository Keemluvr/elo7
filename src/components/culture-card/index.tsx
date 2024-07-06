import Image from "next/image";
import Link from "next/link";
import "./style.scss";
import getLocalBase64 from "@/lib/getLocalBase64";

type CultureCardRedirectTo = {
  label: string;
  href: string;
};

type CultureCardProps = {
  img: string;
  alt: string;
  title: string;
  description: string;
  redirectTo?: CultureCardRedirectTo;
};

export default async function CultureCard({
  img,
  alt,
  title,
  description,
  redirectTo,
}: CultureCardProps) {
  const cardImageBlurDataURL = await getLocalBase64(img);
  return (
    <li className="culture-card-wrapper" aria-label="card de cultura">
      <Image
        src={img}
        blurDataURL={cardImageBlurDataURL}
        placeholder="blur"
        alt={alt}
        loading="lazy"
        className="culture-card-icon"
        quality={100}
        width={136}
        height={136}
        aria-label="ícone do card de cultura"
        data-testid={`culture-card-icon-${title.toLowerCase()}`}
      />
      <h2 className="culture-card-title">{title}</h2>
      <p className="culture-card-description">{description}</p>
      {redirectTo && (
        <Link
          href={redirectTo.href}
          role="button"
          className="culture-card-button"
          rel="noopener noreferrer"
          target="_blank"
        >
          {redirectTo.label}
          <Image
            width={24}
            height={24}
            src="/icons/arrow-right.svg"
            alt="seta para direita"
            aria-label="ícone de seta"
            quality={100}
          />
        </Link>
      )}
    </li>
  );
}
