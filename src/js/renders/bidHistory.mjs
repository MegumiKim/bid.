export const renderBidHistory = (data, container) => {
  if (!data.bids.length) {
    container.innerText = "No bids yet";
  }

  data.bids
    .slice()
    .reverse()
    .forEach((item) => {
      const date = new Date(item.created).toLocaleDateString("en-GB");
      const bid = document.createElement("li");
      bid.innerText = `${item.amount}pt by ${item.bidderName} on ${date}`;

      container.append(bid);
    });
};
