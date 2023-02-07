import { API_BASE_URL } from "../constants.mjs";

export async function fetchSingleEntry(id) {
  const singleEntryURL = `${API_BASE_URL}listings/${id}?_seller=true&_bids=true`;
  const options = makeOptions();
  const response = await fetch(singleEntryURL, options);

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
