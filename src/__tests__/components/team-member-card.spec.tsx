import TeamMemberCard from "@/components/team-member-card";
import { render } from "@testing-library/react";
import { verifyAttributes } from "../utils/verifyAttributes";

let container = {} as DocumentFragment;

describe("TeamMemberCard component", () => {
  const name = "john-doe";
  const alt = "John Doe";

  it("should render the component", () => {
    const { getByRole } = render(<TeamMemberCard name={name} alt={alt} />);
    const containerElement = getByRole("img").parentElement;
    expect(containerElement).toBeInTheDocument();
  });

  it("should render the wrapper with the correct attributes", () => {
    const { getByRole } = render(<TeamMemberCard name={name} alt={alt} />);
    const containerElement = getByRole("img").parentElement;
    expect(containerElement).toHaveClass("team-member-card");
  });

  describe("Image", () => {
    it("should render an image", () => {
      const { getByAltText } = render(<TeamMemberCard name={name} alt={alt} />);
      const img = getByAltText(alt);
      expect(img).toBeInTheDocument();
    });

    it("should render an image with the correct attributes", () => {
      const { getByAltText } = render(<TeamMemberCard name={name} alt={alt} />);
      const imgElement = getByAltText(alt);
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
    const { asFragment } = render(<TeamMemberCard name={name} alt={alt} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
