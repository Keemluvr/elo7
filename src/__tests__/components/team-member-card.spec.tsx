import TeamMemberCard from "@/components/team-member-card";
import { render, screen } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";

let container = {} as DocumentFragment;

describe("TeamMemberCard component", () => {
  const name = "john-doe";
  const alt = "John Doe";

  beforeEach(() => {
    const { asFragment } = render(<TeamMemberCard name={name} alt={alt} />);
    container = asFragment();
  });

  it("should render the component", () => {
    const containerElement = screen.getByRole("img").parentElement;
    expect(containerElement).toBeInTheDocument();
  });

  it("should render the wrapper with the correct attributes", () => {
    const containerElement = screen.getByRole("img").parentElement;
    const containerAttributes = [["class", "team-member-card"]];
    verifyAttributes(containerElement as HTMLElement, containerAttributes);
  });

  describe("Image", () => {
    it("should render an image", () => {
      const img = screen.getByAltText(alt);
      expect(img).toBeInTheDocument();
    });

    it("should render an image with the correct attributes", () => {
      const imgElement = screen.getByAltText(alt);

      const expectedSrc =
        "/_next/image?url=%2Fimages%2Fteam%2Fjohn-doe.webp&w=3840&q=100";
      const imageAttributes = [
        ["src", expectedSrc],
        ["loading", "lazy"],
        ["alt", alt],
        ["aria-label", `imagem membro da equipe: ${name}`],
        ["class", "team-member-card-image"],
      ];
      verifyAttributes(imgElement, imageAttributes);
    });
  });

  test("matches snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
