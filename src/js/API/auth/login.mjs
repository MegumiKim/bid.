import { API_BASE_URL } from "../constants.mjs";
import { getErrorMessage } from "../getErrorMsg.mjs";

const loginURL = `${API_BASE_URL}auth/login`;

export async function login(payload) {
  const options = makeOptions("POST", payload);
  const response = await fetch(loginURL, options);

  if (response.ok) {
    const result = await response.json();
    return result;
  }
  const responseText = await response.text();
  let errorString = getErrorMessage(responseText);
  throw new Error(JSON.stringify(errorString));
}

function makeOptions(method, payload) {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
}
