export const formatDate = (rawData) => {
  const formattedDate = new Date(rawData).toLocaleString(undefined, {
    // year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formattedDate;
};
