interface Data<T> {
  [key: string]: T[];
}

/**
 * Searches the data for entries that match all the terms in the query.
 *
 * @param {Data<T>} data - The data to search through.
 * @param {string | null} query - The search query.
 * @param {(keyof T)[]} properties - The properties to search within.
 * @return {Data<T> | undefined} The filtered data based on the search query.
 */
export const searchByCombinedTerms = <T>(
  data: Data<T>,
  query: string | null,
  properties: (keyof T)[]
): Data<T> | undefined => {
  if (!query) return;

  const terms = query.toLowerCase().split(" ");
  const filteredData: Data<T> = {};

  for (const key in data) {
    const filteredEntries = data[key].filter((entry: T) => {
      const entryString = properties
        .map((prop) => (entry[prop] as string).toLowerCase())
        .join(" ");
      return terms.every((term) => entryString.includes(term));
    });

    if (filteredEntries.length > 0) {
      filteredData[key] = filteredEntries;
    }
  }
  return Object.keys(filteredData).length > 0 ? filteredData : undefined;
};
