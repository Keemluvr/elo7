import { render } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";
import Hero from "@/components/hero";

describe("Hero component", () => {
  describe("Section", () => {
    const sectionName = "seção de banner";

    test("should render the section component", () => {
      const { getByRole } = render(<Hero />);
      const sectionElement = getByRole("region", { name: sectionName });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const { getByRole } = render(<Hero />);
      const sectionElement = getByRole("region", { name: sectionName });
      expect(sectionElement.tagName).toBe("SECTION");
    });
  });

  describe("Image", () => {
    const backgroundImage = "imagem de fundo";

    test("should render the image", () => {
      const { getByRole } = render(<Hero />);
      const imageElement = getByRole("img", { name: backgroundImage });
      expect(imageElement).toBeInTheDocument();
    });

    test("should render the image with correct properties", () => {
      const { getByRole } = render(<Hero />);
      const imageElement = getByRole("img", { name: backgroundImage });
      const expectedSrc = "/_next/image?url=%2Fimages%2Fhero.webp&w=3840&q=100";
      const attributes = [
        ["src", expectedSrc],
        ["fetchpriority", "high"],
        ["class", "hero-image"],
      ];
      verifyAttributes(imageElement, attributes);
      expect(imageElement).toHaveAttribute("srcset");
      expect(imageElement.getAttribute("srcset")).not.toBe("");
    });
  });

  describe("Title", () => {
    const titleHeading = "titulo emcima da imagem";

    test("should render the title", () => {
      const { getByRole } = render(<Hero />);
      const titleElement = getByRole("heading", { name: titleHeading });
      expect(titleElement).toBeInTheDocument();
    });

    test("should render the title with correct properties", () => {
      const { getByRole } = render(<Hero />);
      const titleElement = getByRole("heading", { name: titleHeading });
      expect(titleElement).toHaveClass("hero-image-title");
      expect(titleElement).toHaveTextContent("trabalhe no elo7");
    });

    test("should render the title with correct tag name", () => {
      const { getByRole } = render(<Hero />);
      const titleElement = getByRole("heading", { name: titleHeading });
      expect(titleElement.tagName).toBe("H1");
    });
  });

  describe("Description", () => {
    const descriptionText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis.";

    test("should render the description", () => {
      const { getByText } = render(<Hero />);
      const descriptionElement = getByText(descriptionText);
      expect(descriptionElement).toBeInTheDocument();
    });

    test("should render the description with correct properties", () => {
      const { getByText } = render(<Hero />);
      const descriptionElement = getByText(descriptionText);
      expect(descriptionElement).toHaveClass("hero-description");
    });
  });

  describe("Horizontal Line", () => {
    const lineSeparator = "linha horizontal";

    test("should render the horizontal line", () => {
      const { getByRole } = render(<Hero />);
      const horizontalLine = getByRole("separator", { name: lineSeparator });
      expect(horizontalLine).toBeInTheDocument();
    });

    test("should render the horizontal line with correct properties", () => {
      const { getByRole } = render(<Hero />);
      const horizontalLine = getByRole("separator", { name: lineSeparator });
      expect(horizontalLine).toHaveClass("hero-horizontal-line");
    });
  });

  describe("Link Button", () => {
    const linkButtonText = "vagas em aberto";

    test("should render the link button ", () => {
      const { getByRole } = render(<Hero />);
      const linkButton = getByRole("button", { name: linkButtonText });
      expect(linkButton).toBeInTheDocument();
    });

    test("should render the link button with correct properties", () => {
      const { getByRole } = render(<Hero />);
      const linkButton = getByRole("button", { name: linkButtonText });
      const attributes = [
        ["href", "#open-positions"],
        ["role", "button"],
      ];
      verifyAttributes(linkButton, attributes);
    });

    test("should render the link with correct tag name", () => {
      const { getByRole } = render(<Hero />);
      const linkButton = getByRole("button", { name: linkButtonText });
      expect(linkButton.tagName).toBe("A");
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
