"use client";

import useGetJobs from "@/hooks/getJobs";
import OpenPositionsList from "../open-positions-list";
import "./style.scss";
import SkeletonJobs from "./skeleton-jobs";

export default function OpenPositions() {
  const { jobs, loading } = useGetJobs();

  return (
    <section
      id="open-positions"
      className="grid-container"
      aria-label="seção de vagas abertas"
    >
      <div className="grid-item-full-width open-positions-wrapper">
        <hgroup className="open-positions-header">
          <h2 className="open-positions-title">Vagas em aberto</h2>
          <input placeholder="TODO: Pesquisar" />
        </hgroup>

        <div className="open-positions-content">
          {loading ? (
            <SkeletonJobs />
          ) : jobs.length === 0 ? (
            <p>Nenhuma vaga encontrada</p>
          ) : (
            Object.entries(jobs).map((jobByType, jobByTypeIndex) => {
              const [type, jobs] = jobByType;
              return (
                <OpenPositionsList
                  key={jobByTypeIndex}
                  type={type}
                  jobs={jobs}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
