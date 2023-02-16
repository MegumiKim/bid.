import { signup } from "../../API/auth/signup.mjs";
import { login } from "../../API/auth/login.mjs";
import { save } from "../../storage/local.mjs";
import { userAlert } from "../../renders/userAlert.mjs";

export async function signUpListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const signupInputs = Object.fromEntries(formData.entries());
  const email = formData.get("email");
  const password = formData.get("password");
  const error = document.querySelector("#user-alert");

  try {
    const result = await signup(signupInputs);
    const { accessToken, credits, ...userDetails } = await login({
      email,
      password,
    });

    save("accessToken", accessToken);
    save("credits", credits);
    save("userDetails", userDetails);

    window.location.assign("/");
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}
