import { render } from "@testing-library/react";
import { verifyAttributes } from "../helpers/verifyAttributes";
import SaleswomanReview from "@/components/saleswoman-review";

describe("SaleswomanReview component", () => {
  describe("Section", () => {
    const regionName = "seção da palavra da vendedora";

    test("should render the section component", () => {
      const { getByRole } = render(<SaleswomanReview />);
      const sectionElement = getByRole("region", { name: regionName });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const { getByRole } = render(<SaleswomanReview />);
      const sectionElement = getByRole("region", { name: regionName });
      expect(sectionElement.tagName).toBe("SECTION");
    });
  });

  describe("Image", () => {
    const imageRoleName = "imagem da vendedora";

    test("should render the image", () => {
      const { getByRole } = render(<SaleswomanReview />);
      const imageElement = getByRole("img", { name: imageRoleName });
      expect(imageElement).toBeInTheDocument();
    });

    test("should render the image with correct properties", () => {
      const { getByRole } = render(<SaleswomanReview />);
      const imageElement = getByRole("img", { name: imageRoleName });
      const expectedSrc =
        "/_next/image?url=%2Fimages%2Fsaleswoman.webp&w=3840&q=100";
      const attributes = [
        ["src", expectedSrc],
        ["loading", "lazy"],
        [
          "alt",
          "Uma mulher jovem trabalha em uma oficina de artesanato, concentrada em suas atividades. A mesa está repleta de ferramentas e materiais de trabalho, destacando um ambiente criativo e artesanal.",
        ],
      ];
      verifyAttributes(imageElement, attributes);
      expect(imageElement).toHaveClass("saleswoman-review-image");
      expect(imageElement).toHaveAttribute("srcset");
      expect(imageElement.getAttribute("srcset")).not.toBe("");
    });
  });

  describe("Description", () => {
    describe("Title", () => {
      const titleText = "Palavra da vendedora";

      test("should render the title", () => {
        const { getByText } = render(<SaleswomanReview />);
        const titleElement = getByText(titleText);
        expect(titleElement).toBeInTheDocument();
      });

      test("should render the title with  with correct tag name", () => {
        const { getByText } = render(<SaleswomanReview />);
        const titleElement = getByText(titleText);
        expect(titleElement.tagName).toBe("H2");
      });

      test("should render the title with correct properties", () => {
        const { getByText } = render(<SaleswomanReview />);
        const titleElement = getByText(titleText);
        expect(titleElement).toHaveClass("saleswoman-review-title");
      });
    });

    describe("Subtitle", () => {
      const subtitleText = "Sed rutrum condimentum";

      test("should render the subtitle", () => {
        const { getByText } = render(<SaleswomanReview />);
        const subtitleElement = getByText(subtitleText);
        expect(subtitleElement).toBeInTheDocument();
      });

      test("should render the subtitle with correct properties", () => {
        const { getByText } = render(<SaleswomanReview />);
        const subtitleElement = getByText(subtitleText);
        expect(subtitleElement).toHaveClass("saleswoman-review-subtitle");
      });
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<SaleswomanReview />);
    expect(asFragment()).toMatchSnapshot();
  });
});
