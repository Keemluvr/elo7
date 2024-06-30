import { render, screen } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";
import Hero from "@/components/hero";
import "@testing-library/jest-dom";

let container = {} as DocumentFragment;

describe("Hero component", () => {
  beforeEach(() => {
    const { asFragment } = render(<Hero />);
    container = asFragment();
  });

  describe("Section", () => {
    test("should render the section component", () => {
      const sectionElement = screen.getByRole("region", {
        name: "seção de banner",
      });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const sectionElement = screen.getByRole("region", {
        name: "seção de banner",
      });
      expect(sectionElement.tagName).toBe("SECTION");
    });
  });

  describe("Image", () => {
    test("should render the image", () => {
      const imageElement = screen.getByRole("img", { name: "imagem de fundo" });
      expect(imageElement).toBeInTheDocument();
    });

    test("should render the image with correct properties", () => {
      const imageElement = screen.getByRole("img", { name: "imagem de fundo" });
      const expectedSrc = "/_next/image?url=%2Fimages%2Fhero.webp&w=3840&q=100";
      const attributes = [
        ["src", expectedSrc],
        ["fetchpriority", "high"],
      ];
      verifyAttributes(imageElement, attributes);
      expect(imageElement).toHaveAttribute("srcset");
      expect(imageElement.getAttribute("srcset")).not.toBe("");
      expect(imageElement).toHaveClass("hero-image");
    });
  });

  describe("Title", () => {
    test("should render the title", () => {
      const titleElement = screen.getByRole("heading", {
        name: "titulo emcima da imagem",
      });
      expect(titleElement).toBeInTheDocument();
    });

    test("should render the title with correct properties", () => {
      const titleElement = screen.getByRole("heading", {
        name: "titulo emcima da imagem",
      });
      expect(titleElement).toHaveClass("hero-image-title");
      expect(titleElement).toHaveTextContent("trabalhe no elo7");
    });

    test("should render the title with correct tag name", () => {
      const titleElement = screen.getByRole("heading", {
        name: "titulo emcima da imagem",
      });
      expect(titleElement.tagName).toBe("H1");
    });
  });

  describe("Description", () => {
    test("should render the description", () => {
      const descriptionElement = screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis."
      );
      expect(descriptionElement).toBeInTheDocument();
    });

    test("should render the description with correct properties", () => {
      const descriptionElement = screen.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis."
      );

      expect(descriptionElement).toHaveClass("hero-description");
    });
  });

  describe("Horizontal Line", () => {
    test("should render the horizontal line", () => {
      const horizontalLine = screen.getByRole("separator", {
        name: "linha horizontal",
      });
      expect(horizontalLine).toBeInTheDocument();
    });

    test("should render the horizontal line with correct properties", () => {
      const horizontalLine = screen.getByRole("separator", {
        name: "linha horizontal",
      });

      expect(horizontalLine).toHaveClass("hero-horizontal-line");
    });
  });

  describe("Link Button", () => {
    test("should render the link button ", () => {
      const linkButton = screen.getByRole("button", {
        name: "vagas em aberto",
      });
      expect(linkButton).toBeInTheDocument();
    });

    test("should render the link button with correct properties", () => {
      const linkButton = screen.getByRole("button", {
        name: "vagas em aberto",
      });

      expect(linkButton).toHaveAttribute("href", "#open-positions");
      expect(linkButton).toHaveClass("hero-button");
      expect(linkButton).toHaveRole("button");
      expect(linkButton.tagName).toBe("A");
    });

    test("should render the link with correct tag name", () => {
      const linkButton = screen.getByRole("button", {
        name: "vagas em aberto",
      });

      expect(linkButton.tagName).toBe("A");
    });
  });

  test("matches snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
