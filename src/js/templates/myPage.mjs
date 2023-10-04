import { cloneTemplate } from "./cloneTemplate.mjs";

/**
 * Fills HTML template with data fetched by API and creates user profile HTML
 * @param {object} data
 * @param {*} parent
 */
export const postMyPage = (data, parent) => {
  const doc = cloneTemplate("user-summary-temp");
  const h1 = doc.querySelector("h1");
  h1.innerText = `Hello ${data.name}!`;

  doc.querySelector(
    "div.cash-point"
  ).innerHTML = `<h2>Current Bid Point</h2> <h3><image class="gold-coin-lg mb-1 ms-2" src="../../../asset/img/coin.png" alt="cash point icon"></image> ${data.credits} pt</h3>`;

  const img = doc.querySelector("img.rounded-circle");
  img.alt = data.name;
  img.src = data.avatar;
  // img.onerror = (event) => {
  //   event.target.src = "../../../asset/img/avatar-placeholder.png";
  // };

  doc.querySelector("h3.username").innerText = data.name;
  doc.querySelector("p.email").innerText = data.email;

  parent.append(doc);
};
