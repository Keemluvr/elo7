import { render } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";
import OpenPositionsListItem from "@/components/open-positions-list-item";

describe("OpenPositionsListItem component", () => {
  const title = "Frontend Developer";
  const location = "São Paulo, Brazil";
  const itemName = "vaga disponível";

  test("should render the component", () => {
    const { getByRole } = render(
      <OpenPositionsListItem title={title} location={location} />
    );
    const itemElement = getByRole("listitem", { name: itemName });
    expect(itemElement).toBeInTheDocument();
  });

  test("should render the component with correct tag", () => {
    const { getByRole } = render(
      <OpenPositionsListItem title={title} location={location} />
    );
    const itemElement = getByRole("listitem", { name: itemName });
    expect(itemElement.tagName).toBe("LI");
  });

  describe("Link", () => {
    test("should render the link", () => {
      const { getByRole } = render(
        <OpenPositionsListItem title={title} location={location} />
      );
      const linkElement = getByRole("link");
      expect(linkElement).toBeInTheDocument();
    });

    test("should have the correct properties", () => {
      const { getByRole } = render(
        <OpenPositionsListItem title={title} location={location} />
      );
      const linkElement = getByRole("link");
      expect(linkElement).toHaveClass("open-positions-item-link");
      expect(linkElement).toHaveAttribute("href");
      expect(linkElement.getAttribute("href")).toBeDefined();
    });
  });

  describe("Title", () => {
    test("should render the title", () => {
      const { getByText } = render(
        <OpenPositionsListItem title={title} location={location} />
      );
      const titleElement = getByText(title);
      expect(titleElement).toBeInTheDocument();
    });

    test("should render the correct title", () => {
      const { getByText } = render(
        <OpenPositionsListItem title={title} location={location} />
      );
      const titleElement = getByText(title);
      expect(titleElement).toHaveTextContent(title);
    });
  });

  describe("Location", () => {
    test("should render the location", () => {
      const { getByText } = render(
        <OpenPositionsListItem title={title} location={location} />
      );
      const locationElement = getByText(location);
      expect(locationElement).toBeInTheDocument();
    });

    test("should render the correct location", () => {
      const { getByText } = render(
        <OpenPositionsListItem title={title} location={location} />
      );
      const locationElement = getByText(location);
      expect(locationElement).toHaveTextContent(location);
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <OpenPositionsListItem title={title} location={location} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
