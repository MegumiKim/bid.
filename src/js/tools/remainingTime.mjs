export const remainingTime = (endsAt) => {
  const now = new Date();
  const difference = endsAt - now;

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
