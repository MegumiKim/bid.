export const highestBid = (data, bidAmount = 0) => {
  if (data.bids) {
    if (data.bids.length) {
      const myBids = data.bids.map((item) => item.amount);
      const highest = Math.max(...myBids);
      return highest;
    } else {
      return 0;
    }
  } else {
    return bidAmount;
  }
};
