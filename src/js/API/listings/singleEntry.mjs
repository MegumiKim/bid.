import { API_BASE_URL } from "../constants.mjs";

export async function fetchSingleEntry(id) {
  const singleEntryURL = `${API_BASE_URL}listings/${id}?_seller=true&_bids=true`;
  const options = makeOptions();
  const response = await fetch(singleEntryURL, options);
  const result = await response.json();

  if (response.ok) {
    return result;
  }
  const errorText = result.errors[0].message
    ? result.errors[0].message
    : "Server error";
  throw new Error(errorText);
}

function makeOptions() {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}
