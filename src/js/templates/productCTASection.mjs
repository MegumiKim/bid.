import * as tool from "../tools/index.mjs";
import * as sort from "../sort/sort/index.mjs";
import * as template from "./index.mjs";
import * as render from "../renders/index.mjs";

export const postProductCTASection = (data, parent) => {
  try {
    const doc = template.cloneTemplate("product-CTA-section");
    const timeLeft = tool.remainingTime(data.endsAt);
    const endsAt = tool.formatDate(data.endsAt);
    const created = tool.formatDate(data.created);
    const highest = sort.highestBid(data);
    const tagContainer = doc.querySelector("div.tags");
    template.renderTags(data, tagContainer);
    doc.querySelector("h1").innerText = data.title;
    doc.querySelector("div.endsAt").innerText = endsAt;
    doc.querySelector("div.bids").innerText = `${highest} pt`;
    doc.querySelector("div.created").innerText = created;
    doc.querySelector("div.time-remain").innerText = timeLeft;

    parent.append(doc);
  } catch (e) {
    render.userAlert(parent, "Failed to fetch data", "danger");
    throw new Error(e);
  }
};
