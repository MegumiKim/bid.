import { cloneTemplate } from "./cloneTemplate.mjs";

export const postSeller = (data, parent) => {
  const doc = cloneTemplate("seller-template");
  doc.querySelector(".seller-name").innerText = data.seller.name;
  doc.querySelector(".email").innerText = data.seller.email;

  parent.append(doc);
};
