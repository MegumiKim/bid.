import * as tool from "../tools/index.mjs";

/**
 * Sort out the bid history as the highest top, if there are any bids.
 * @param {Object} data
 * @param {*} container
 */
export const renderBidHistory = (data, container) => {
  if (!data.bids.length) {
    container.innerText = "No bids yet";
  }
  const sortedItems = data.bids.sort((a, b) => b.amount - a.amount);
  createBidItem(sortedItems, container);
};

/**
 * Create HTML element for each bid item
 * @param {Object} items
 * @param {*} container
 */
const createBidItem = (items, container) => {
  items.forEach((item) => {
    const date = tool.formatDate(item.created);
    const bid = document.createElement("div");
    bid.classList.add("d-flex");
    bid.classList.add("flex-wrap");
    bid.innerHTML = `<div class="me-2"> ${item.amount}pt - ${date} </div><div class="mb-2"> by ${item.bidderName}</div>
     `;
    container.append(bid);
  });
};
