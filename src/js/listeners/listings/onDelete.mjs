import * as API from "../../API/index.mjs";
import * as render from "../../renders/index.mjs";
import * as listener from "./index.mjs";

/**
 * Listens to form submit event and awaits for Delete request.
 * After successful form submission, redirects the user to profile page.
 * @param {*} event
 * @param {string} id
 */
export async function deleteListingListener(event, id) {
  event.preventDefault();
  const error = document.querySelector("#user-alert-delete");
  try {
    await API.deleteListing(id);
    listener.jumpToProfilePage();
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
