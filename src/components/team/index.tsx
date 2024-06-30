"use client";

import TeamMemberCard from "../team-member-card";
import "./style.scss";

export default function Team() {
  return (
    <section aria-label="seção da apresentação do time">
      <div className="grid-container">
        <h2 className="grid-item-full-width team-title">
          Conheça nosso time fora de série
        </h2>
        <div className="grid-item-full-width team-content">
          <TeamMemberCard
            name="ana"
            alt="Ana, uma mulher sorrindo enquanto trabalha em um ambiente colaborativo."
          />
          <TeamMemberCard
            name="joao"
            alt="João, um homem de barba ruiva e camisa branca, sorrindo com os braços cruzados em um ambiente de escritório, com duas pessoas ao fundo conversando."
          />
          <TeamMemberCard
            name="maria"
            alt="Maria, uma mulher sorrindo enquanto segura um laptop em um ambiente de escritório moderno."
          />
          <TeamMemberCard
            name="pedro"
            alt="Pedro, um homem com cabelo cacheado e barba, usando fones de ouvido e uma camisa azul, sentado em frente a um laptop e sorrindo."
          />
        </div>
      </div>
    </section>
  );
}
