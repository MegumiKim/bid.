import { load } from "../storage/local.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";
import { highestBid } from "../sort/sort/highestBid.mjs";

export const postBidForm = (data, parent) => {
  const doc = cloneTemplate("bid-form-temp");
  const myPoints = load("credits");
  const bid = highestBid(data);

  doc.querySelector("h4").innerText = `Product: ${data.title} `;
  doc.querySelector("div.bids").innerText = bid;
  doc.querySelector("div.my-points").innerText = `${myPoints} pt `;

  parent.append(doc);
};
