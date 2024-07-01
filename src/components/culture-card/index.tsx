import Image from "next/image";
import Link from "next/link";
import "./style.scss";

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

export default function CultureCard({
  img,
  alt,
  title,
  description,
  redirectTo,
}: CultureCardProps) {
  return (
    <li className="culture-card-wrapper" aria-label="card de cultura">
      <Image
        src={img}
        alt={alt}
        loading="lazy"
        className="culture-card-icon"
        quality={100}
        width={136}
        height={136}
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
        </Link>
      )}
    </li>
  );
}
