"use client";

import Image from "next/image";
import "./style.scss";

export default function SewingBanner() {
  return (
    <section
      className="grid-container .grid-item-full-width-without-margin sewing-banner-wrapper"
      aria-label="seção de banner com imagem"
    >
      <Image
        className="sewing-banner-image"
        src="/images/sewing.webp"
        aria-label="imagem de uma pessoa fazendo artesanato"
        alt="Imagem de uma pessoa fazendo artesanato, cortando flores de tecido preto com uma tesoura, cercada por fitas, linhas, agulhas e tiaras decoradas com flores."
        quality={100}
        loading="lazy"
        fill
      />
    </section>
  );
}
