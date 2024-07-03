import "./style.scss";

interface OpenPositionsListItemProps {
  title: string;
  location: string;
}

export default function OpenPositionsListItem({
  title,
  location,
}: OpenPositionsListItemProps) {
  return (
    <li aria-label="vaga disponível" className="open-positions-item">
      <a href="#" className="open-positions-item-link">
        {title}
        <span>{location}</span>
      </a>
    </li>
  );
}
