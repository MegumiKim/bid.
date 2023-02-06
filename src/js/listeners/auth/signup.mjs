import { API_BASE_URL } from "../../API/constants.mjs";
import { signup } from "../../API/auth/signup.mjs";
import { login } from "./login.mjs";

const registerURL = `${API_BASE_URL}/api/v1/auction/auth/register`;
const loginURL = `${API_BASE_URL}/api/v1/auction/auth/login`;

export async function signUpListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const signupInputs = Object.fromEntries(formData.entries());
  const options = makeOptions(signupInputs);
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const loginPayload = { email, password };
    await signup(registerURL, options);
    await login(loginURL, loginPayload);
  } catch (e) {
    console.log(e);
  }
}

function makeOptions(payload) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
}
