import { render, screen } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";
import SaleswomanReview from "@/components/saleswoman-review";
import "@testing-library/jest-dom";

let container = {} as DocumentFragment;

describe("SaleswomanReview component", () => {
  beforeEach(() => {
    const { asFragment } = render(<SaleswomanReview />);
    container = asFragment();
  });

  describe("Section", () => {
    test("should render the section component", () => {
      const sectionElement = screen.getByRole("region", {
        name: "seção da palavra da vendedora",
      });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const sectionElement = screen.getByRole("region", {
        name: "seção da palavra da vendedora",
      });
      expect(sectionElement.tagName).toBe("SECTION");
    });
  });

  describe("Image", () => {
    test("should render the image", () => {
      const imageElement = screen.getByRole("img", {
        name: "imagem da vendedora",
      });
      expect(imageElement).toBeInTheDocument();
    });

    test("should render the image with correct properties", () => {
      const imageElement = screen.getByRole("img", {
        name: "imagem da vendedora",
      });
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
      test("should render the title", () => {
        const titleElement = screen.getByText("Palavra da vendedora");
        expect(titleElement).toBeInTheDocument();
      });

      test("should render the title with  with correct tag name", () => {
        const titleElement = screen.getByText("Palavra da vendedora");
        expect(titleElement.tagName).toBe("H2");
      });

      test("should render the title with correct properties", () => {
        const titleElement = screen.getByRole("heading", {
          name: "Palavra da vendedora",
        });
        expect(titleElement).toHaveClass("saleswoman-review-title");
      });
    });

    describe("Subtitle", () => {
      test("should render the subtitle", () => {
        const subtitleElement = screen.getByText("Sed rutrum condimentum");
        expect(subtitleElement).toBeInTheDocument();
      });

      test("should render the subtitle with correct properties", () => {
        const subtitleElement = screen.getByText("Sed rutrum condimentum");
        expect(subtitleElement).toHaveClass("saleswoman-review-subtitle");
      });
    });
  });

  test("matches snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
