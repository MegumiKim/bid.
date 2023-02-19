import { cloneTemplate } from "./cloneTemplate.mjs";

export const postSeller = (data, parent) => {
  try {
    const doc = cloneTemplate("seller-template");
    doc.querySelector(".seller-name").innerText = data.seller.name;
    doc.querySelector(".email").innerText = data.seller.email;

    parent.append(doc);
  } catch (e) {
    userAlert(parent, "Could not fetch data");
    throw new Error(e);
  }
};
