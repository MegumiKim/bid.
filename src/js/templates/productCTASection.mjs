import { remainingTime } from "../tools/remainingTime.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";
import { highestBid } from "../sort/sort/highestBid.mjs";
import { userAlert } from "../renders/userAlert.mjs";
import { renderTags } from "./tags.mjs";
import { formatDate } from "../tools/changeDateFormat.mjs";
export const postProductCTASection = (data, parent) => {
  try {
    const doc = cloneTemplate("product-CTA-section");
    const timeLeft = remainingTime(data.endsAt);
    const endsAt = formatDate(data.endsAt);
    const created = formatDate(data.created);
    const highest = highestBid(data);
    const tagContainer = doc.querySelector("div.tags");
    renderTags(data, tagContainer);
    doc.querySelector("h1").innerText = data.title;
    doc.querySelector("div.endsAt").innerText = endsAt;
    doc.querySelector("div.bids").innerText = highest;
    doc.querySelector("div.created").innerText = created;
    doc.querySelector("div.time-remain").innerText = timeLeft;

    parent.append(doc);
  } catch (e) {
    userAlert(parent, "Failed to fetch data", "danger");
    throw new Error(e);
  }
};
