/**
 * Capitalizes the first letter of the input string and converts the rest to lowercase.
 *
 * @param {string} string - The input string to be capitalized.
 * @return {string} The capitalized string.
 */
export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

/**
 * Capitalizes each word in a string, including words separated by hyphens.
 *
 * @param {string} string - The input string to be capitalized.
 * @return {string} The capitalized string with each word capitalized and words separated by hyphens preserved.
 */
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

/**
 * Formats a location string into a city, state, and country.
 *
 * @param {string} location - The location string to format.
 * @return {string} The formatted location string.
 */
export const formatLocation = (location: string) => {
  const [city, state, country] = location.split(", ");
  if (!city || !country) return "";
  return `${capitalizeWords(city)}, ${capitalizeWords(country)}`;
};

/**
 * Replaces specific substrings in a given string with their corresponding uppercase versions.
 *
 * @param {string} string - The input string to be processed.
 * @return {string} The modified string with the special cases replaced.
 */
export const specialCases = (string: string) => {
  return string
    .replace(/fp&a/gi, "FP&A")
    .replace(/Android/gi, "Android")
    .replace(/Ios/gi, "iOS")
    .replace(/devops/gi, "DevOps")
    .replace(/Sre/gi, "SRE");
};
