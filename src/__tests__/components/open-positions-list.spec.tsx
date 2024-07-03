import OpenPositionsList from "@/components/open-positions-list";
import { talentBank } from "@/constants/links";
import { render } from "@testing-library/react";

const mockJobs = {
  Engenharia: [
    {
      type: "Engenharia",
      title: "Pessoa Desenvolvedora Front-end",
      location: "Rio de Janeiro, Brasil",
    },
    {
      type: "Engenharia",
      title: "Pessoa Desenvolvedora Back-end",
      location: "São Paulo, Brasil",
    },
  ],
  Produto: [
    { type: "Produto", title: "Gerente de Produto", location: "Remoto" },
  ],
};

describe("OpenPositionsList Component", () => {
  describe("when loading", () => {
    it("should render the loading skeleton", () => {
      const { getByTestId } = render(
        <OpenPositionsList jobs={{}} loading={true} />
      );
      expect(getByTestId("loading-skeleton")).toBeInTheDocument();
    });
  });

  describe("when jobs list is empty", () => {
    it("should render the empty state message", () => {
      const { getByText } = render(<OpenPositionsList jobs={{}} />);
      expect(getByText("Nenhuma vaga encontrada")).toBeInTheDocument();
    });

    it("should render the empty state button", () => {
      const { getByText, getByRole } = render(<OpenPositionsList jobs={{}} />);
      expect(
        getByText("Entre para nosso banco de talentos")
      ).toBeInTheDocument();
      expect(getByRole("button")).toBeInTheDocument();
      expect(getByRole("link")).toHaveAttribute("href", talentBank);
    });
  });

  describe("when jobs list is not empty", () => {
    it("should render the job list with correct list tags", () => {
      const { getByRole, getAllByRole } = render(
        <OpenPositionsList jobs={mockJobs} />
      );

      const listElement = getByRole("list", {
        name: mockJobs.Engenharia[0].type,
      });
      expect(listElement.tagName).toBe("UL");

      const listitemElement = getAllByRole("listitem", {
        name: "vaga disponível",
      });
      listitemElement.forEach((item) => {
        expect(item.tagName).toBe("LI");
      });
    });

    it("should render the job item as a link", () => {
      const { getAllByRole } = render(<OpenPositionsList jobs={mockJobs} />);

      const linkElement = getAllByRole("link");
      linkElement.forEach((item) => {
        expect(item.tagName).toBe("A");
      });
    });

    it("should render all the job types, titles and locations", () => {
      const { getByText } = render(<OpenPositionsList jobs={mockJobs} />);

      const types = Object.keys(mockJobs) as (keyof typeof mockJobs)[];

      types.forEach((type) => {
        expect(getByText(type)).toBeInTheDocument();

        mockJobs[type].forEach(({ title, location }) => {
          expect(getByText(title)).toBeInTheDocument();
          expect(getByText(location)).toBeInTheDocument();
        });
      });
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<OpenPositionsList jobs={mockJobs} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
