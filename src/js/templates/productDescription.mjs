import { userAlert } from "../renders/userAlert.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";
import { renderBidHistory } from "../renders/bidHistory.mjs";

export const postProductDescription = (data, parent) => {
  try {
    const doc = cloneTemplate("description-template");
    const bidHistoryContainer = doc.querySelector("#bid-history-container");

    renderBidHistory(data, bidHistoryContainer);

    doc.querySelector("p.description").innerText = data.description;
    doc.querySelector(".seller-name").innerText = data.seller.name;
    doc.querySelector(".email").innerText = data.seller.email;

    parent.append(doc);
  } catch (e) {
    userAlert(parent, "Could not fetch data", "secondary");
    throw new Error(e);
  }
};
