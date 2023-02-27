import * as tool from "../tools/index.mjs";

export const renderBidHistory = (data, container) => {
  if (!data.bids.length) {
    container.innerText = "No bids yet";
  }
  const sortedItems = data.bids.sort((a, b) => a.amount < b.amount);
  renderBidItem(sortedItems, container);
};

const renderBidItem = (items, container) => {
  items.forEach((item) => {
    const date = tool.formatDate(item.created);
    const bid = document.createElement("div");
    bid.classList.add("d-flex");
    bid.classList.add("flex-wrap");
    bid.innerHTML = `<div class="me-2">${date}  | </div><div class="mb-2">${item.amount}pt : ${item.bidderName}  </div>
     `;
    container.append(bid);
  });
};
