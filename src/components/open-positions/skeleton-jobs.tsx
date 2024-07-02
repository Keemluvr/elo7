import { JobTransformed } from "@/types/job";
import "./style.scss";

interface PositionListProps {
  type: string;
  jobs: JobTransformed[];
}

const items = new Array(3).fill(0);

export default function SkeletonJobs() {
  return (
    <section className="open-positions-by-type-skeleton">
      <h3 className="open-positions-type-skeleton">Loading</h3>
      <ul className="open-positions-content-by-type">
        {items.map((item, index) => (
          <li key={index} className="open-positions-item-skeleton">
            Loading
          </li>
        ))}
      </ul>
    </section>
  );
}
