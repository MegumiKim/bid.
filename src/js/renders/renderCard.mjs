import { listingCardTemplate } from "../templates/listingCard.mjs";

export const renderCard = (parent, data, selector = ".col") => {
  const template = listingCardTemplate(data);
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, "text/html");
  const element = doc.querySelector(selector);

  parent.append(element);
};
