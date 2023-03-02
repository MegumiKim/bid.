import * as tool from "../tools/index.mjs";
import * as template from "./index.mjs";
import * as storage from "../storage/local.mjs";
/**
 * Fills HTML template with data fetched by API and makes seller HTML
 * @param {object} data
 * @param {*} parent
 */
export const postCreditNAV = async () => {
  const welcomeUser = document.querySelector(".welcome-user");
  welcomeUser.clearHTML();
  const doc = template.cloneTemplate("credit-NAV");

  try {
    const username = storage.load("userDetails").name;
    const credit = await tool.getMyCredits();
    doc.querySelector("p.user-name").innerText = `Hi ${username}!`;
    doc.querySelector("small.credit").innerText = `${credit} pt`;

    welcomeUser.append(doc);
  } catch {
    welcomeUser.innerText = "Welcome";
  }
};
