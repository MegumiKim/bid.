export const highestBid = (data, bidAmount = 0) => {
  if (data.bids) {
    if (data.bids.length) {
      return Math.max(...data.bids.map((item) => item.amount));
    } else {
      return 0;
    }
  } else {
    return bidAmount;
  }
};
