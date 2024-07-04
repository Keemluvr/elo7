"use client";

import useGetJobs from "@/hooks/getJobs";
import OpenPositionsList from "../open-positions-list";
import { useEffect, useState } from "react";
import "./style.scss";

export default function OpenPositions() {
  const { jobs, filteredJobs, loading, filteredTerms, setFilteredTerms } =
    useGetJobs();

  return (
    <section id="open-positions" aria-label="seção de vagas abertas">
      <div className="grid-container">
        <hgroup className="grid-item-full-width open-positions-header">
          <h2 className="open-positions-title">Vagas em aberto</h2>
          {Object.entries(jobs).length && !loading ? (
            <input
              placeholder="nome da vaga"
              aria-label="Pesquisar por vaga"
              onChange={(e) => setFilteredTerms(e.target.value)}
            />
          ) : null}
        </hgroup>

        <div className="grid-item-full-width open-positions-content">
          <OpenPositionsList
            jobs={filteredTerms ? filteredJobs : jobs}
            loading={loading}
          />
        </div>
      </div>
    </section>
  );
}
