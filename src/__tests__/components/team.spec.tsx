import { render } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";
import Team from "@/components/team";

describe("Team component", () => {
  describe("Section", () => {
    const sectionRoleName = "seção da apresentação do time";

    test("should render the section component", () => {
      const { getByRole } = render(<Team />);
      const sectionElement = getByRole("region", { name: sectionRoleName });
      expect(sectionElement).toBeInTheDocument();
    });

    test("should render the section with correct tag name", () => {
      const { getByRole } = render(<Team />);
      const sectionElement = getByRole("region", { name: sectionRoleName });
      expect(sectionElement.tagName).toBe("SECTION");
    });
  });

  describe("Title", () => {
    const titleText = "Conheça nosso time fora de série";

    test("should render the title", () => {
      const { getByText } = render(<Team />);
      const titleElement = getByText(titleText);
      expect(titleElement).toBeInTheDocument();
    });

    test("should render the title with correct tag name", () => {
      const { getByText } = render(<Team />);
      const titleElement = getByText(titleText);
      expect(titleElement.tagName).toBe("H2");
    });

    test("should render the title with correct properties", () => {
      const { getByText } = render(<Team />);
      const titleElement = getByText(titleText);
      expect(titleElement).toHaveClass("team-title");
    });
  });

  describe("Cards", () => {
    const teamMembers = [
      {
        name: "ana",
        alt: "Ana, uma mulher sorrindo enquanto trabalha em um ambiente colaborativo.",
      },
      {
        name: "joao",
        alt: "João, um homem de barba ruiva e camisa branca, sorrindo com os braços cruzados em um ambiente de escritório, com duas pessoas ao fundo conversando.",
      },
      {
        name: "maria",
        alt: "Maria, uma mulher sorrindo enquanto segura um laptop em um ambiente de escritório moderno.",
      },
      {
        name: "pedro",
        alt: "Pedro, um homem com cabelo cacheado e barba, usando fones de ouvido e uma camisa azul, sentado em frente a um laptop e sorrindo.",
      },
    ];

    test.each(teamMembers)("should render the $name's photo", ({ alt }) => {
      const { getByAltText } = render(<Team />);
      const teamMemberElement = getByAltText(alt);
      expect(teamMemberElement).toBeInTheDocument();
    });

    test.each(teamMembers)(
      "should render the correct attributes for the $name's photo",
      ({ name, alt }) => {
        const { getByAltText } = render(<Team />);
        const teamMemberElement = getByAltText(alt);
        const attributes = [
          ["aria-label", `imagem membro da equipe: ${name}`],
          ["loading", "lazy"],
        ];
        verifyAttributes(teamMemberElement, attributes);
        expect(teamMemberElement).toHaveAttribute("srcset");
        expect(teamMemberElement.getAttribute("srcset")).not.toBe("");
      }
    );
  });

  test("matches snapshot", async () => {
    const { asFragment } = render(<Team />);
    expect(asFragment()).toMatchSnapshot();
  });
});
