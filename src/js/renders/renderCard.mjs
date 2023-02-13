import { listingCardTemplate } from "../templates/listingCardTemplate.mjs";

export const renderCard = (parent, data, selector = ".col") => {
  const template = listingCardTemplate(data);
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, "text/html");
  const element = doc.querySelector(selector);

  const tagsContainer = doc.querySelector(".tags");
  const tags = data.tags;
  if (tags.length) {
    tags.forEach((tag) => {
      tagsContainer.innerText += `#${tag} `;
    });
  }

  parent.append(element);
};
