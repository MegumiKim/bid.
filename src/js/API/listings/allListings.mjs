import { API_BASE_URL } from "../../API/constants.mjs";

const allListingsURL = `${API_BASE_URL}listings?_active=true&limit=20`;

export async function fetchListings() {
  const options = makeOptions();
  const response = await fetch(allListingsURL, options);

  if (response.ok) {
    return await response.json();
  }
  throw new Error(JSON.stringify(response.statusText));
}

function makeOptions() {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}
