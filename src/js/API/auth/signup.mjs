import { API_BASE_URL } from "../../API/constants.mjs";
import { getErrorMessage } from "../getErrorMsg.mjs";
const registerURL = `${API_BASE_URL}auth/register`;

export async function signup(payload) {
  const options = makeOptions("POST", payload);
  const response = await fetch(registerURL, options);

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

// import { DEFAULT_OPTIONS } from "defaults";

// export const signup = async (url, payload, options) => {
//   const body = JSON.stringify(payload);
//   const response = await fetch(url, { ...DEFAULT_OPTIONS, ...options, body });
//   const data = await response.json();

//   if (response.ok) {
//     return data;
//   }

//   throw new Error(JSON.stringify(data));
// }
