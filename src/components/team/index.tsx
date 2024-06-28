"use client";

import TeamMemberCard from "../team-member-card";
import "./style.scss";

export default function Team() {
  return (
    <section>
      <div className="grid-container">
        <h2 className="grid-item-full-width team-title">
          Conheça nosso time fora de série
        </h2>
        <div className="grid-item-full-width team-content">
          <TeamMemberCard
            name="ana"
            alt="Membro da equipe sorrindo enquanto trabalha em um ambiente colaborativo."
          />
          <TeamMemberCard name="joao" alt="" />
          <TeamMemberCard
            name="maria"
            alt="Membro da equipe sorrindo enquanto segura um laptop em um ambiente de escritório moderno."
          />
          <TeamMemberCard name="pedro" alt="" />
        </div>
      </div>
    </section>
  );
}
