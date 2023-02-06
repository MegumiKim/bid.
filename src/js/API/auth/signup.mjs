export async function signup(url, options) {
  const response = await fetch(url, options);

  if (response.ok) {
    return await response.json();
  }

  throw new Error(JSON.stringify(response.statusText));
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
