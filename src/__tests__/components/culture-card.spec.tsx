import { render } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";
import CultureCard from "@/components/culture-card";

describe("CultureCard component", () => {
  const props = {
    img: "/images/culture/thumbs-up.webp",
    alt: "ícone de um polegar para cima",
    title: "Qualidade de vida",
    description: "Donec in vestibulum elit.",
    redirectTo: {
      label: "dignissim quis",
      href: "https://www.elo7.com.br/sobre",
    },
  };

  const propsWithoutRedirectTo = {
    img: "/images/culture/gallery.webp",
    alt: "ícone de uma imagem",
    title: "Resultados",
    description: "Aliquam finibus facilisis elit.",
  };

  describe("List item", () => {
    test("should render the component", () => {
      const { getByRole } = render(<CultureCard {...props} />);
      const listItemElement = getByRole("listitem", {
        name: "card de cultura",
      });
      expect(listItemElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const { getByRole } = render(<CultureCard {...props} />);
      const listItemElement = getByRole("listitem", {
        name: "card de cultura",
      });
      expect(listItemElement.tagName).toBe("LI");
    });
  });

  describe("Image", () => {
    test("should render the image", () => {
      const { getByAltText } = render(<CultureCard {...props} />);
      const imageElement = getByAltText(props.alt);
      expect(imageElement).toBeInTheDocument();
    });

    test("should render the image with correct properties", () => {
      const { getByAltText } = render(<CultureCard {...props} />);
      const imageElement = getByAltText(props.alt);
      const expectedSrc =
        "/_next/image?url=%2Fimages%2Fculture%2Fthumbs-up.webp&w=384&q=100";
      const attributes = [
        ["src", expectedSrc],
        ["alt", props.alt],
        ["loading", "lazy"],
        ["class", "culture-card-icon"],
      ];
      verifyAttributes(imageElement, attributes);
      expect(imageElement).toHaveAttribute("srcset");
      expect(imageElement.getAttribute("srcset")).not.toBe("");
    });
  });

  describe("Title", () => {
    test("should render the title", () => {
      const { getByText } = render(<CultureCard {...props} />);
      const titleElement = getByText(props.title);
      expect(titleElement).toBeInTheDocument();
    });

    test("should render the title with correct tag name", () => {
      const { getByText } = render(<CultureCard {...props} />);
      const titleElement = getByText(props.title);
      expect(titleElement.tagName).toBe("H2");
    });
  });

  describe("Description", () => {
    test("should render the description", () => {
      const { getByText } = render(<CultureCard {...props} />);
      const descriptionElement = getByText(props.description);
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  describe("Link", () => {
    test("should render the button", () => {
      const { getByRole } = render(<CultureCard {...props} />);
      const buttonElement = getByRole("button", {
        name: props.redirectTo?.label,
      });
      expect(buttonElement).toBeInTheDocument();
    });

    test("should render the button with correct tag name", () => {
      const { getByRole } = render(<CultureCard {...props} />);
      const buttonElement = getByRole("button", {
        name: props.redirectTo?.label,
      });
      expect(buttonElement.tagName).toBe("A");
    });

    test("should render the button with correct properties", () => {
      const { getByRole } = render(<CultureCard {...props} />);
      const buttonElement = getByRole("button", {
        name: props.redirectTo?.label,
      });
      const attributes = [
        ["class", "culture-card-button"],
        ["href", props.redirectTo.href],
        ["rel", "noopener noreferrer"],
        ["role", "button"],
        ["target", "_blank"],
      ];
      verifyAttributes(buttonElement, attributes);
    });

    test("should hidden the button when the redirectTo is undefined", () => {
      const { getByRole } = render(<CultureCard {...propsWithoutRedirectTo} />);
      const itemListElement = getByRole("listitem");
      expect(itemListElement).not.toHaveRole("button");
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <>
        <CultureCard {...props} />
        <CultureCard {...propsWithoutRedirectTo} />
      </>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
