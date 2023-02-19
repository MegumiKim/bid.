export const remainingTime = (endsAt) => {
  const now = new Date();
  const difference = endsAt - now;

  if (difference < 0) {
    return "Expired";
  } else if (difference < 86400000) {
    const inHours = Math.floor(difference / (1000 * 60 * 60));
    return `${inHours} hours`;
  }

  const inDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  return `${inDays} days`;
};
