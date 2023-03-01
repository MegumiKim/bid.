import * as template from "./index.mjs";

/**
 * Fills HTML template with data fetched by API and makes seller HTML
 * @param {object} data
 * @param {*} parent
 */
export const postSeller = (data, parent) => {
  try {
    const doc = template.cloneTemplate("seller-template");
    doc.querySelector(".seller-name").innerText = data.seller.name;
    doc.querySelector(".email").innerText = data.seller.email;

    parent.append(doc);
  } catch (e) {
    userAlert(parent, "Failed to fetch data", "danger");
    // throw new Error(e);
  }
};
