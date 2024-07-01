import { render } from "@testing-library/react";
import Culture from "@/components/culture";

describe("Culture component", () => {
  describe("Section", () => {
    test("should render the section component", () => {
      const { getByRole } = render(<Culture />);
      const sectionElement = getByRole("region", {
        name: "seção sobre a cultura da elo7",
      });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const { getByRole } = render(<Culture />);
      const sectionElement = getByRole("region", {
        name: "seção sobre a cultura da elo7",
      });
      expect(sectionElement.tagName).toBe("SECTION");
    });
  });

  describe("List", () => {
    test("should render the list ", () => {
      const { getByRole } = render(<Culture />);
      const sectionElement = getByRole("region", {
        name: "seção sobre a cultura da elo7",
      });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render three CultureCard components", () => {
      const { getAllByRole } = render(<Culture />);
      const cultureCards = getAllByRole("listitem", {
        name: "card de cultura",
      });
      expect(cultureCards).toHaveLength(3);
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Culture />);
    expect(asFragment()).toMatchSnapshot();
  });
});
