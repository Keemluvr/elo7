export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

export const capitalizeWords = (string: string) => {
  return string
    .split(" ")
    .map((word) => {
      if (word.includes("-")) {
        const parts = word.split("-");
        return parts.map((part) => capitalize(part)).join("-");
      }
      return capitalize(word);
    })
    .join(" ");
};

export const formatLocation = (location: string) => {
  const [city, state, country] = location.split(", ");
  return `${capitalizeWords(city)}, ${capitalizeWords(country)}`;
};

export const specialCases = (string: string) => {
  return string
    .replace(/fp&a/gi, "FP&A")
    .replace(/Android/gi, "Android")
    .replace(/Ios/gi, "iOS")
    .replace(/devops/gi, "DevOps")
    .replace(/Sre/gi, "SRE");
};
