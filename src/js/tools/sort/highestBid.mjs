export const highestBid = (data) => {
  if (data.bids) {
    if (data.bids.length) {
      const myBids = data.bids.map((item) => item.amount);
      const highest = Math.max(...myBids);
      return `${highest} pt`;
    } else {
      return "No bid";
    }
  }
};
