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
    const bid = document.createElement("div");
    bid.classList.add("col");
    bid.innerText = `${date} : ${item.amount}pt  ${item.bidderName} on `;

    container.append(bid);
  });
};
