"use client";

import CultureCard from "../culture-card";
import "./style.scss";

export default function Culture() {
  return (
    <section
      className="grid-container grid-item-full-width-without-margin culture-wrapper"
      aria-label="seção sobre a cultura da elo7"
    >
      <ul
        className="grid-item-full-width culture-content"
        aria-label="listagem dos valores da elo7"
      >
        <CultureCard
          img="/images/culture/gallery.webp"
          alt="ícone de uma imagem"
          title="Resultados"
          description="Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien."
        />
        <CultureCard
          img="/images/culture/thumbs-up.webp"
          alt="ícone de um polegar para cima"
          title="Qualidade de vida"
          description="Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla."
          redirectTo={{
            label: "dignissim quis",
            href: "https://www.elo7.com.br/sobre",
          }}
        />
        <CultureCard
          img="/images/culture/vault.webp"
          alt="ícone de um cofre"
          title="Resultados"
          description="Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien."
        />
      </ul>
    </section>
  );
}
