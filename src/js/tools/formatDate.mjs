/**
 *Take a raw data (date string) and returns a local string in numeric date/time format
 * @param {string} rawData
 * @returns formatted Date
 * @example
 * ```js
 * formatDate(data.date) = 01/01, 12:00
 * ```
 */
export const formatDate = (rawData) => {
  const formattedDate = new Date(rawData).toLocaleString("en-GB", {
    // year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formattedDate;
};
