"use client";

import CultureCard from "../culture-card";
import { cultureList } from "./culture-items";
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
        {cultureList.map((item) => (
          <CultureCard
            key={item.title}
            img={item.img}
            alt={item.alt}
            title={item.title}
            description={item.description}
            redirectTo={item.redirectTo}
          />
        ))}
      </ul>
    </section>
  );
}
