import * as API from "../../API/index.mjs";
import * as render from "../../renders/index.mjs";
import * as storage from "../../storage/local.mjs";

/**
 * Listens to form submission event and makes a payload.
 * Saves the accessToken and user Details returned by API in the local storage. After successful login, redirects the user to main page.
 * @param {*} event
 */
export async function loginListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  const error = document.querySelector("#user-alert");
  try {
    const { accessToken, credits, ...userDetails } = await API.login(payload);

    storage.save("accessToken", accessToken);
    storage.save("credits", credits);
    storage.save("userDetails", userDetails);

    window.location.assign("/");
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
