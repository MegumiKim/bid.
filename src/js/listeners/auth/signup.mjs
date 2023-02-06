import { API_BASE_URL } from "../../API/constants.mjs";
import { signup } from "../../API/auth/signup.mjs";
import { save } from "../../storage/local.mjs";

const registerURL = `${API_BASE_URL}/api/v1/auction/auth/register`;

export async function signUpListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const signupInputs = Object.fromEntries(formData.entries());
  const options = makeOptions(signupInputs);

  try {
    const { id, credits, ...userDetails } = await signup(registerURL, options);

    if (id) {
      save("id", id);
      save("credits", credits);
      save("userDetails", userDetails);

      window.location.assign("/");
    }
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
