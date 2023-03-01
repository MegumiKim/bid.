import * as API from "../../API/index.mjs";
import * as tool from "../../tools/index.mjs";
import * as render from "../../renders/index.mjs";
import * as storage from "../../storage/local.mjs";

/**
 * Listens to form submit event and prepare a payload for API call.
 * Updates and replace the old avatar image in local storage and reload the page.
 * @param {*} event
 */
export async function editAvatarListener(event) {
  event.preventDefault();
  const error = document.querySelector("#user-alert-avatar");
  const closeBtn = document.querySelector("#close-modal-btn");

  const name = tool.getParam("name");
  const form = event.target;
  const formData = new FormData(form);
  let payload = Object.fromEntries(formData.entries());

  try {
    const response = await API.editAvatar(name, payload);
    const userDetails = storage.load("userDetails");
    userDetails.avatar = response.avatar;

    storage.save("userDetails", userDetails);
    error.clearHTML();
    form.reset();
    render.myPage();
    render.myListings();
    closeBtn.click();
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
