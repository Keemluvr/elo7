"use client";

import Image from "next/image";
import "./style.scss";

export default function SaleswomanReview() {
  return (
    <section
      className="grid-container .grid-item-full-width-without-margin saleswoman-review-wrapper"
      aria-label="seção da palavra da vendedora"
    >
      <div className="grid-item-full-width saleswoman-review-content">
        <div className="saleswoman-review-image-wrapper">
          <Image
            className="saleswoman-review-image"
            src="/images/saleswoman.webp"
            aria-label="imagem da vendedora"
            alt="Uma mulher jovem trabalha em uma oficina de artesanato, concentrada em suas atividades. A mesa está repleta de ferramentas e materiais de trabalho, destacando um ambiente criativo e artesanal."
            quality={100}
            loading="lazy"
            fill
          />
        </div>
        <div className="saleswoman-review-description">
          <hgroup aria-label="cabecalho da avaliacao da vendedora">
            <h2 className="saleswoman-review-title">Palavra da vendedora</h2>
            <p className="saleswoman-review-subtitle">Sed rutrum condimentum</p>
          </hgroup>
          <p>
            Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet
            malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed
            id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque
            finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam
            mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue
            neque nulla vehicula purus.
          </p>
        </div>
      </div>
    </section>
  );
}
