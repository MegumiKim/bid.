import * as API from "../../API/index.mjs";
import * as render from "../../renders/index.mjs";
import * as storage from "../../storage/local.mjs";

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
