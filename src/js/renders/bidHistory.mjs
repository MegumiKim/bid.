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
    bid.classList.add("d-flex");
    bid.classList.add("flex-wrap");
    bid.innerHTML = `<div class="me-2">${date}  | </div><div class="mb-2">${item.amount}pt : ${item.bidderName}  </div>
     `;
    // bid.classList.add("row-cols-2");

    // bid.classList.add("row");
    // bid.classList.add("row-cols-2");
    // bid.innerHTML = `<div class="col ">${item.amount}pt : ${item.bidderName}  </div>
    //  <div class="col ">${date}</div>`;
    container.append(bid);
  });
};
