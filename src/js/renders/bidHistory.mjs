import { userAlert } from "./userAlert.mjs";

export const renderBidHistory = (data, container) => {
  try {
    if (!data.bids.length) {
      container.innerText = "No bids yet";
    }

    const sortedItems = data.bids.sort((a, b) => a.amount < b.amount);

    sortedItems.forEach((item) => {
      const date = new Date(item.created).toLocaleDateString("en-GB");
      const bid = document.createElement("li");
      bid.innerText = `${item.amount}pt by ${item.bidderName} on ${date}`;

      container.append(bid);
    });
  } catch (e) {
    userAlert(container, "failed to fetch data");
    throw new Error(e);
  }
};
