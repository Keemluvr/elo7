"use client";

import { JobTransformed } from "@/types/job";
import OpenPositionsListItem from "../open-positions-list-item";
import "./style.scss";

interface PositionListProps {
  type: string;
  jobs: JobTransformed[];
}

export default function OpenPositionsList({ type, jobs }: PositionListProps) {
  return (
    <section className="open-positions-by-type">
      <h3 className="open-positions-type">{type}</h3>
      <ul className="open-positions-content-by-type" data-header={type}>
        {(jobs as JobTransformed[]).map(({ title, location }, index) => (
          <OpenPositionsListItem
            key={index}
            title={title}
            location={location}
          />
        ))}
      </ul>
    </section>
  );
}
