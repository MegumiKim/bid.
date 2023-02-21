import { formatDate } from "../tools/changeDateFormat.mjs";

export const renderBidHistory = (data, container) => {
  if (!data.bids.length) {
    container.innerText = "No bids yet";
  }
  const sortedItems = data.bids.sort((a, b) => a.amount < b.amount);
  renderBidItem(sortedItems, container);
};

const renderBidItem = (items, container) => {
  items.forEach((item) => {
    const date = formatDate(item.created);
    const bid = document.createElement("li");
    bid.innerText = `${item.amount}pt by ${item.bidderName} on ${date}`;

    container.append(bid);
  });
};
