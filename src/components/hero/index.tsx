import Image from "next/image";
import Link from "next/link";
import getLocalBase64 from "@/lib/getLocalBase64";
import "./style.scss";

export default async function Hero() {
  const heroImage = "/images/hero.webp";
  const heroImageBlurDataURL = await getLocalBase64(heroImage);

  return (
    <section aria-label="seção de banner">
      <div className="hero-image-wrapper">
        <Image
          src={heroImage}
          blurDataURL={heroImageBlurDataURL}
          placeholder="blur"
          className="hero-image"
          alt="Equipe de colaboradores celebrando e batendo as mãos em um ambiente de escritório, destacando a cultura de trabalho colaborativa e positiva da empresa."
          aria-label="imagem de fundo"
          quality={100}
          fill
          priority
        />
        <h1 className="hero-image-title" aria-label="titulo emcima da imagem">
          trabalhe no elo7
        </h1>
      </div>
      <div className="grid-container">
        <p
          className="grid-item-full-width hero-description"
          aria-label="descrição da elo7"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          viverra orci. Praesent consequat dolor tellus, eget viverra risus
          hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque
          libero eu eros sagittis.
        </p>

        <hr
          className="grid-item-full-width hero-horizontal-line"
          aria-label="linha horizontal"
        />

        <Link
          href="#open-positions"
          role="button"
          aria-label="vagas em aberto"
          className="grid-item-full-width hero-button"
        >
          vagas em aberto
          <Image
            width={24}
            height={24}
            src="/icons/arrow-right.svg"
            alt="seta para direita"
            aria-label="ícone de seta"
            quality={100}
          />
        </Link>
      </div>
    </section>
  );
}
