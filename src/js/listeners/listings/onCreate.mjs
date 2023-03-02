import * as API from "../../API/index.mjs";
import * as tool from "../../tools/index.mjs";
import * as render from "../../renders/index.mjs";
import * as listener from "./index.mjs";

/**
 * Listens to form submit event and makes a payload.
 * After successful form submission, redirects the user to main page.
 * @param {*} event
 */
export async function createListingListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const error = document.querySelector("#user-alert");

  let payload = Object.fromEntries(formData.entries());
  payload.tags = payload.tags.split(",");
  if (payload.media) {
    payload.media = payload.media.split(",");
  }

  if (!tool.validateDate(payload.endsAt)) {
    throw new Error("past date selected");
  }
  payload.endsAt = new Date(payload.endsAt);

  try {
    await API.createListing(payload);
    form.reset();
    render.myPage();
    listener.jumpToProfilePage();
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
