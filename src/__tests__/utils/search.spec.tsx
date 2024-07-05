// searchByCombinedTerms.test.ts

import { JobsData } from "@/types/job";
import { searchByCombinedTerms } from "@/utils/search";

const data: JobsData = {
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
    { type: "Produto", title: "Pessoa Gerente de Produto", location: "Remoto" },
  ],
};

describe("search util", () => {
  describe("searchByCombinedTerms", () => {
    it("should handle empty data", () => {
      const emptyData: JobsData = {};
      const result = searchByCombinedTerms(emptyData, "Engenharia", [
        "type",
        "title",
        "location",
      ]);
      expect(result).toBeUndefined();
    });

    it("should return undefined if query is null", () => {
      const result = searchByCombinedTerms(data, null, [
        "type",
        "title",
        "location",
      ]);
      expect(result).toBeUndefined();
    });

    it("should return undefined if no entries match", () => {
      const result = searchByCombinedTerms(data, "Designer", [
        "type",
        "title",
        "location",
      ]);
      expect(result).toBeUndefined();
    });

    it("should return matching entries for a single term", () => {
      const result = searchByCombinedTerms(data, "Desenvolvedora", [
        "type",
        "title",
        "location",
      ]);
      expect(result).toEqual({
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
      });
    });

    it("should return matching entries for multiple terms", () => {
      const result = searchByCombinedTerms(data, "Desenvolvedora Front-end", [
        "type",
        "title",
        "location",
      ]);
      expect(result).toEqual({
        Engenharia: [
          {
            type: "Engenharia",
            title: "Pessoa Desenvolvedora Front-end",
            location: "Rio de Janeiro, Brasil",
          },
        ],
      });
    });

    it("should return matching entries across multiple groups", () => {
      const result = searchByCombinedTerms(data, "Pessoa", [
        "type",
        "title",
        "location",
      ]);
      expect(result).toEqual({
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
          {
            type: "Produto",
            title: "Pessoa Gerente de Produto",
            location: "Remoto",
          },
        ],
      });
    });

    it("should be case insensitive", () => {
      const result = searchByCombinedTerms(data, "remoto", [
        "type",
        "title",
        "location",
      ]);
      expect(result).toEqual({
        Produto: [
          {
            type: "Produto",
            title: "Pessoa Gerente de Produto",
            location: "Remoto",
          },
        ],
      });
    });
  });
});
