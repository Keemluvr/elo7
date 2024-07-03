"use client";

import useGetJobs from "@/hooks/getJobs";
import OpenPositionsList from "../open-positions-list";
import "./style.scss";

export default function OpenPositions() {
  const { jobs, loading } = useGetJobs();

  return (
    <section id="open-positions" aria-label="seção de vagas abertas">
      <div className="grid-container">
        <hgroup className="grid-item-full-width open-positions-header">
          <h2 className="open-positions-title">Vagas em aberto</h2>
          <input placeholder="TODO: Pesquisar" />
        </hgroup>

        <div className="grid-item-full-width open-positions-content">
          <OpenPositionsList jobs={jobs} loading={loading} />
        </div>
      </div>
    </section>
  );
}
