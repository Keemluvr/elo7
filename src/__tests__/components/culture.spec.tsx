import { render } from "@testing-library/react";
import { cultureList } from "@/components/culture/culture-items";
import { verifyAttributes } from "../utils/verifyAttributes";
import Culture from "@/components/culture";

describe("Culture component", () => {
  describe("Section", () => {
    const sectionName = "seção sobre a cultura da elo7";
    test("should render the section component", () => {
      const { getByRole } = render(<Culture />);
      const sectionElement = getByRole("region", { name: sectionName });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const { getByRole } = render(<Culture />);
      const sectionElement = getByRole("region", { name: sectionName });
      expect(sectionElement.tagName).toBe("SECTION");
    });
  });

  describe("List", () => {
    const listName = "listagem dos valores da elo7";
    const listItemName = "card de cultura";
    const listItemImg = "ícone do card de cultura";

    test("should render the list ", () => {
      const { getByRole } = render(<Culture />);
      const sectionElement = getByRole("list", { name: listName });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render three CultureCard components", () => {
      const { getAllByRole } = render(<Culture />);
      const cultureCards = getAllByRole("listitem", { name: listItemName });
      expect(cultureCards).toHaveLength(3);
    });

    test.each(Array.from(cultureList, (item, index) => ({ ...item, index })))(
      "should render the $title card with correct attributes",
      ({ index, alt, title, description }) => {
        const imgList = [
          "/_next/image?url=%2Fimages%2Fculture%2Fgallery.webp&w=384&q=100",
          "/_next/image?url=%2Fimages%2Fculture%2Fthumbs-up.webp&w=384&q=100",
          "/_next/image?url=%2Fimages%2Fculture%2Fvault.webp&w=384&q=100",
        ];
        const props = {
          img: imgList[index],
          alt,
          title,
          description,
          ariaLabel: listItemImg,
          class: "culture-card-icon",
        };

        const { getAllByText, getByTestId, getByText } = render(<Culture />);
        const imgElement = getByTestId(
          `culture-card-icon-${props.title.toLowerCase()}`
        );
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute("srcset");
        expect(imgElement.getAttribute("srcset")).not.toBe("");
        verifyAttributes(imgElement, [
          ["alt", props.alt],
          ["aria-label", props.ariaLabel],
          ["src", props.img],
          ["loading", "lazy"],
        ]);
        expect(getByText(props.title)).toBeInTheDocument();
        expect(getAllByText(props.description)).not.toHaveLength(0);
      }
    );
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Culture />);
    expect(asFragment()).toMatchSnapshot();
  });
});
