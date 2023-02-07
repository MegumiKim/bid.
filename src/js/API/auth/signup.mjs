import { API_BASE_URL } from "../../API/constants.mjs";

const registerURL = `${API_BASE_URL}auth/register`;

export async function signup(payload) {
  const options = makeOptions("POST", payload);
  const response = await fetch(registerURL, options);
  const data = await response.json();

  if (response.ok) {
    console.log(data);

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
