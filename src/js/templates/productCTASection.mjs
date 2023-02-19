import { remainingTime } from "../utils/remainingTime.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";
import { highestBid } from "../tools/sort/highestBid.mjs";

export const postProductCTASection = (data, parent) => {
  const doc = cloneTemplate("product-CTA-section");
  const expiry = remainingTime(new Date(data.endsAt));
  const highest = highestBid(data);

  doc.querySelector("h1").innerText = data.title;
  doc.querySelector("li.endTime").innerText = `Ends in: ${expiry}`;
  doc.querySelector("li.currentBid").innerText = `Highest bid: ${highest} pt`;

  parent.append(doc);
};
