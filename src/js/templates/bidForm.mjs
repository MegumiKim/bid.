import { load } from "../storage/local.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";
import * as listeners from "../listeners/index.mjs";
import * as sort from "../sort/sort/index.mjs";

/**
 * Fill HTML "Bid form template" with data fetched by API
 * @param {object} data
 * @param {*} parent
 */
export const postBidForm = (data, parent) => {
  const doc = cloneTemplate("bid-form-temp");
  const myPoints = load("credits");
  const bid = sort.highestBid(data);
  const minimumBid = bid + 1;
  doc.querySelector(
    "h3.modal-title"
  ).innerHTML = `Bid on <strong> ${data.title}</strong> `;
  doc.querySelector("div.bids").innerText = `${bid} pt`;
  doc.querySelector("div.my-points").innerText = `${myPoints} pt `;
  doc.querySelector("input").min = minimumBid;
  doc.querySelector("input").value = minimumBid;

  doc
    .querySelector("form#bid-form")
    .addEventListener("submit", listeners.makeBidListener);

  parent.append(doc);
};
