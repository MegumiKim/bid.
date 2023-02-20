import { userAlert } from "../renders/userAlert.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";

export const postProductDescription = (data, parent) => {
  try {
    const doc = cloneTemplate("description-template");
    doc.querySelector("p.description").innerText = data.description;

    const tags = doc.querySelector("ul.tags-container");

    // Tags
    if (!data.tags.length) {
      tags.innerText = "No tag";
    }
    data.tags.forEach((item) => {
      const tag = document.createElement("li");
      tag.innerText = `#${item}`;
      tags.append(tag);
    });

    parent.append(doc);
  } catch (e) {
    userAlert(parent, "Could not fetch descriptions", "danger");
    throw new Error(e);
  }
};
