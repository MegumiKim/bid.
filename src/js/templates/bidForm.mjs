import { load } from "../storage/local.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";
import { highestBid } from "../sort/sort/highestBid.mjs";
import * as listeners from "../listeners/index.mjs";

export const postBidForm = (data, parent) => {
  const doc = cloneTemplate("bid-form-temp");
  const myPoints = load("credits");
  const bid = highestBid(data);

  doc.querySelector(
    "h3.modal-title"
  ).innerHTML = `Bid on <strong> ${data.title}</strong> `;
  doc.querySelector("div.bids").innerText = `${bid} pt`;
  doc.querySelector("div.my-points").innerText = `${myPoints} pt `;
  doc.querySelector("input").min = bid + 1;
  doc.querySelector("input").placeholder = `minimum ${bid + 1} pt`;

  doc
    .querySelector("form#bid-form")
    .addEventListener("submit", listeners.makeBidListener);

  parent.append(doc);
};
