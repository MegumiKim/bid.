import { load } from "../storage/local.mjs";
import { remainingTime } from "../utils/remainingTime.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";

export const postBidForm = (data, parent) => {
  const doc = cloneTemplate("bid-form-temp");
  const endsIn = remainingTime(new Date(data.endsAt));
  const myPoints = load("credits");

  doc.querySelector("h4").innerText = `Product: ${data.title} `;
  doc.querySelector("h6.end-time").innerText = `Ends in: ${endsIn} `;
  doc.querySelector(
    "h6.my-points"
  ).innerText = `Available points: ${myPoints} pt `;

  parent.append(doc);
};
