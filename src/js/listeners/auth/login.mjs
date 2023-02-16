import { login } from "../../API/auth/login.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
import { save } from "../../storage/local.mjs";

export async function loginListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());
  const error = document.querySelector("#user-alert");
  try {
    const { accessToken, credits, ...userDetails } = await login(payload);

    save("accessToken", accessToken);
    save("credits", credits);
    save("userDetails", userDetails);

    window.location.assign("/");
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}
