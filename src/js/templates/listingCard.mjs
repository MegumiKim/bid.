import { highestBid } from "../tools/sort/highestBid.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";
import { renderTags } from "./tags.mjs";

export const postListingCard = (data, parent) => {
  const doc = cloneTemplate("card-template");
  const created = new Date(data.created).toLocaleDateString("en-GB");
  const endsAt = new Date(data.endsAt).toLocaleDateString("en-GB");
  const bids = highestBid(data);
  const tagContainer = doc.querySelector("div.tags");
  renderTags(data, tagContainer);

  doc.querySelector("a.card").href = `/product/?id=${data.id}`;
  doc.querySelector("h4").innerText = data.title;
  doc.querySelector("p.card-text").innerText = data.description;
  doc.querySelector("div.created").innerText = created;
  doc.querySelector("div.endsAt").innerText = endsAt;
  doc.querySelector("div.bids").innerText = bids;
  const img = doc.querySelector("img");

  img.src = data.media[0];
  img.alt = data.title;
  img.onerror = (event) => {
    event.target.src = "../../../asset/img/placeholder_img.png";
  };
  parent.append(doc);
};
