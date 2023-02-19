export const highestBid = (data) => {
  if (data.bids.length) {
    const myBids = data.bids.map((item) => item.amount);
    const highest = Math.max(...myBids);
    return highest;
  } else {
    return "No bid";
  }
};
