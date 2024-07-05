import Image from "next/image";
import getLocalBase64 from "@/lib/getLocalBase64";
import "./style.scss";

export default async function SewingBanner() {
  const sewingImage = "/images/sewing.webp";
  const sewingImageBlurDataURL = await getLocalBase64(sewingImage);

  return (
    <section
      className="grid-container grid-item-full-width-without-margin sewing-banner-wrapper"
      aria-label="seção de banner com imagem"
    >
      <Image
        src={sewingImage}
        blurDataURL={sewingImageBlurDataURL}
        placeholder="blur"
        className="sewing-banner-image"
        aria-label="imagem de uma pessoa fazendo artesanato"
        alt="Imagem de uma pessoa fazendo artesanato, cortando flores de tecido preto com uma tesoura, cercada por fitas, linhas, agulhas e tiaras decoradas com flores."
        quality={100}
        loading="lazy"
        fill
      />
    </section>
  );
}
