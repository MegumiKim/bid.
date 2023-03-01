import * as API from "../../API/index.mjs";
import * as render from "../../renders/index.mjs";
import * as tool from "../../tools/index.mjs";
import * as storage from "../../storage/local.mjs";

/**
 * Listen to form submit event and makes a payload.
 * After a successful submission, updates a new credit in local storage and reload the page.
 *
 * @param {*} event
 */
export async function makeBidListener(event) {
  event.preventDefault();
  const id = tool.getParam("id");
  const form = event.target;
  const formData = new FormData(form);
  const error = document.querySelector("#user-alert");
  const closeBtn = document.querySelector("#close-modal-btn");

  let payload = Object.fromEntries(formData.entries());
  payload.amount = parseInt(payload.amount);

  try {
    await API.makeBid(id, payload);
    const myCredits = await tool.getMyCredits();
    storage.save("credits", myCredits);
    form.reset();
    render.singleEntry();
    closeBtn.click();
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
