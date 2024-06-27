"use client";

import Image from "next/image";
import Link from "next/link";
import "./hero.scss";

export default function Hero() {
  return (
    <section>
      <div className=" hero-image-wrapper ">
        <Image
          className="hero-image"
          src="/hero.webp"
          alt="Equipe de colaboradores celebrando e batendo as mãos em um ambiente de escritório, destacando a cultura de trabalho colaborativa e positiva da empresa."
          fill
          priority
        />
        <h1 className="hero-title">trabalhe no elo7</h1>
      </div>
      <div className="grid-container">
        <p className="grid-item-full-width hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et
          viverra orci. Praesent consequat dolor tellus, eget viverra risus
          hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque
          libero eu eros sagittis.
        </p>

        <hr className="grid-item-full-width hero-line" />

        <Link href="#" className="grid-item-full-width hero-button">
          vagas em aberto
        </Link>
      </div>
    </section>
  );
}
