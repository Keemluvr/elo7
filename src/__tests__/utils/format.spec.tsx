import {
  capitalize,
  capitalizeWords,
  formatLocation,
  specialCases,
} from "@/utils/format";

describe("Format util", () => {
  describe("capitalize", () => {
    it("should capitalize the first letter of a lowercase string", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("should capitalize the first letter and convert the rest to lowercase", () => {
      expect(capitalize("hELLO")).toBe("Hello");
    });

    it("should handle an empty string", () => {
      expect(capitalize("")).toBe("");
    });

    it("should handle a single character", () => {
      expect(capitalize("a")).toBe("A");
    });

    it("should handle a string that is already capitalized correctly", () => {
      expect(capitalize("Hello")).toBe("Hello");
    });
  });

  describe("capitalizeWords", () => {
    it("should capitalize each first word in a string", () => {
      expect(capitalizeWords("hello world")).toBe("Hello World");
    });

    it("should handle words separated by hyphens", () => {
      expect(capitalizeWords("hello-world")).toBe("Hello-World");
    });

    it("should handle mixed case words", () => {
      expect(capitalizeWords("hELLO wORLD")).toBe("Hello World");
    });

    it("should handle empty string", () => {
      expect(capitalizeWords("")).toBe("");
    });

    it("should handle strings with multiple spaces", () => {
      expect(capitalizeWords("hello   world")).toBe("Hello   World");
    });

    it("should handle words with hyphens and spaces", () => {
      expect(capitalizeWords("hello-world and good-morning")).toBe(
        "Hello-World And Good-Morning"
      );
    });
  });

  describe("formatLocation", () => {
    it("should format a location string correctly", () => {
      expect(formatLocation("new york, ny, usa")).toBe("New York, Usa");
    });

    it("should handle locations with hyphens", () => {
      expect(formatLocation("los angeles, ca, united states")).toBe(
        "Los Angeles, United States"
      );
    });

    it("should handle mixed case location strings", () => {
      expect(formatLocation("lOS aNGELES, cA, UNITED STATES")).toBe(
        "Los Angeles, United States"
      );
    });

    it("should return an empty string if the input is empty", () => {
      expect(formatLocation("")).toBe("");
    });

    it("should return an empty string if the city is missing", () => {
      expect(formatLocation(", ca, usa")).toBe("");
    });

    it("should return an empty string if the country is missing", () => {
      expect(formatLocation("new york, ny,")).toBe("");
    });

    it("should return an empty string if both city and country are missing", () => {
      expect(formatLocation(", ,")).toBe("");
    });

    it("should return an empty string if only one part is provided", () => {
      expect(formatLocation("new york")).toBe("");
    });
  });

  describe("specialCases", () => {
    it('should replace "fp&a" with "FP&A"', () => {
      expect(specialCases("fp&a")).toBe("FP&A");
    });

    it('should replace "Android" with "Android"', () => {
      expect(specialCases("android")).toBe("Android");
    });

    it('should replace "Ios" with "iOS"', () => {
      expect(specialCases("ios")).toBe("iOS");
    });

    it('should replace "devops" with "DevOps"', () => {
      expect(specialCases("devops")).toBe("DevOps");
    });

    it('should replace "Sre" with "SRE"', () => {
      expect(specialCases("sre")).toBe("SRE");
    });

    it("should handle a string with multiple replacements", () => {
      expect(specialCases("fp&a, android, ios, devops, sre")).toBe(
        "FP&A, Android, iOS, DevOps, SRE"
      );
    });

    it("should handle a string with no special cases", () => {
      expect(specialCases("hello world")).toBe("hello world");
    });
  });
});
