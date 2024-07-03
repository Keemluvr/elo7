"use client";

import { JobTransformed } from "@/types/job";
import { talentBank } from "@/constants/links";
import OpenPositionsListItem from "../open-positions-list-item";
import OpenPositionsListSkeleton from "./skeleton";
import Link from "next/link";
import "./style.scss";

interface PositionListProps {
  jobs: { [key: string]: JobTransformed[] };
  loading?: boolean;
}

export default function OpenPositionsList({
  jobs,
  loading,
}: PositionListProps) {
  const jobsArray = Object.entries(jobs);

  if (loading) return <OpenPositionsListSkeleton />;

  if (!jobsArray.length)
    return (
      <div className="open-positions-empty-wrapper">
        <p className="open-positions-empty">Nenhuma vaga encontrada</p>
        <Link href={talentBank} target="_blank" rel="noopener noreferrer">
          <button className="open-positions-empty-button">
            Entre para nosso banco de talentos
          </button>
        </Link>
      </div>
    );

  return Object.entries(jobs).map((jobByType, jobByTypeIndex) => {
    const [type, list] = jobByType;
    return (
      <section className="open-positions-by-type" key={jobByTypeIndex}>
        <h3 className="open-positions-type">{type}</h3>
        <ul className="open-positions-content-by-type" data-header={type}>
          {(list as JobTransformed[]).map(({ title, location }, index) => (
            <OpenPositionsListItem
              key={index}
              title={title}
              location={location}
            />
          ))}
        </ul>
      </section>
    );
  });
}
