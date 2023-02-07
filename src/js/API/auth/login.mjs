import { API_BASE_URL } from "../constants.mjs";

const loginURL = `${API_BASE_URL}auth/login`;

export async function login(payload) {
  const options = makeOptions("POST", payload);
  const response = await fetch(loginURL, options);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(JSON.stringify(data.errors[0].message));
  }
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
