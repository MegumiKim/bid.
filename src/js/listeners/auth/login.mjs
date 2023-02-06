import { API_BASE_URL } from "../../API/constants.mjs";
import { fetchAPI } from "../../API/auth/login.mjs";
import { save } from "../../storage/local.mjs";

const loginURL = `${API_BASE_URL}/api/v1/auction/auth/login`;

export async function loginListener(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  try {
    await login(loginURL, payload);
  } catch (e) {
    console.log(e);
  }
}

export async function login(url, payload) {
  const options = makeOptions(payload);
  const data = await fetchAPI(url, options);
  const { accessToken, credits, ...userDetails } = data;

  if (accessToken) {
    save("accessToken", accessToken);
    save("credits", credits);
    save("userDetails", userDetails);

    window.location.assign("/");
  } else {
    throw new Error(data);
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
