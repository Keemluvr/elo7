import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "@/components/hero";

describe("Hero component", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test("should render the section component", () => {
    const sectionElement = screen.getByRole("region", {
      name: "seção de banner",
    });

    expect(sectionElement).toBeInTheDocument();
  });

  test("should render the image with correct properties", () => {
    const imageElement = screen.getByRole("img", { name: "imagem de fundo" });
    const expectedSrc = "/_next/image?url=%2Fimages%2Fhero.webp&w=3840&q=100";

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveClass("hero-image");
    expect(imageElement).toHaveAttribute("src", expectedSrc);
    expect(imageElement).toHaveAttribute("fetchpriority", "high");
    expect(imageElement).toHaveAttribute("srcset");
    expect(imageElement.getAttribute("srcset")).not.toBe("");
  });

  test("should render the title with correct properties", () => {
    const titleElement = screen.getByRole("heading", {
      name: "titulo emcima da imagem",
    });

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass("hero-image-title");
    expect(titleElement).toHaveTextContent("trabalhe no elo7");
    expect(titleElement.tagName).toBe("H1");
  });

  test("should render the description with correct properties", () => {
    const descriptionElement = screen.getByRole("paragraph", {
      name: "descrição da elo7",
    });

    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveClass("hero-description");
    expect(descriptionElement).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis."
    );
  });

  test("should render the horizontal line with correct properties", () => {
    const horizontalLine = screen.getByRole("separator", {
      name: "linha horizontal",
    });

    expect(horizontalLine).toBeInTheDocument();
    expect(horizontalLine).toHaveClass("hero-horizontal-line");
  });

  test("should render the link button with correct properties", () => {
    const linkButton = screen.getByRole("button", { name: "vagas em aberto" });

    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute("href", "#open-positions");
    expect(linkButton).toHaveClass("hero-button");
    expect(linkButton).toHaveRole("button");
    expect(linkButton.tagName).toBe("A");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
