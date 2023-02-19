import { cloneTemplate } from "./cloneTemplate.mjs";

export const postProductDescription = (data, parent) => {
  const doc = cloneTemplate("description-template");
  doc.querySelector("p.description").innerText = data.description;

  parent.append(doc);
};
