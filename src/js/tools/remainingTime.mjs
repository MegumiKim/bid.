/**
 * Takes date string (endsAt) and calculate the remaining time from current time.
 * Returns dates/hours/minutes or "Expired" according to the time left.
 * @param {string} rawData
 * @returns
 */
export const remainingTime = (rawData) => {
  const now = new Date();
  const difference = new Date(rawData) - now;

  if (difference < 0) {
    return "Expired";
  } else if (difference < 60 * 60 * 1000) {
    const inMinutes = Math.floor(difference / (1000 * 60));
    return `${inMinutes} minutes left`;
  } else if (difference < 60 * 60 * 24 * 1000) {
    const inHours = Math.floor(difference / (1000 * 60 * 60));
    return `${inHours} hours left`;
  }

  const inDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  return `${inDays} days left`;
};
