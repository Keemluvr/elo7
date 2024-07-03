export default function OpenPositionsListSkeleton() {
  return (
    <section className="skeleton-row">
      <div className="skeleton-line loading-animation"></div>
      <ul className="">
        <li className="skeleton-paragraph loading-animation"></li>
        <li className="skeleton-paragraph loading-animation"></li>
        <li className="skeleton-paragraph loading-animation"></li>
        <li className="skeleton-paragraph loading-animation"></li>
      </ul>

      <div className="skeleton-line loading-animation"></div>
      <ul className="">
        <li className="skeleton-paragraph loading-animation"></li>
        <li className="skeleton-paragraph loading-animation"></li>
        <li className="skeleton-paragraph loading-animation"></li>
        <li className="skeleton-paragraph loading-animation"></li>
      </ul>
    </section>
  );
}
