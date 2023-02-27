import * as API from "../../API/index.mjs";
import * as render from "../../renders/index.mjs";
import { save } from "../../storage/local.mjs";

export async function signUpListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const signupInputs = Object.fromEntries(formData.entries());
  const email = formData.get("email");
  const password = formData.get("password");
  const error = document.querySelector("#user-alert");

  try {
    await API.signup(signupInputs);
    const { accessToken, credits, ...userDetails } = await API.login({
      email,
      password,
    });

    save("accessToken", accessToken);
    save("credits", credits);
    save("userDetails", userDetails);

    window.location.assign("/");
  } catch (e) {
    render.userAlert(error, e.message, "secondary");
  }
}
