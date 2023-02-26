import { API_BASE_URL } from "../../API/constants.mjs";

export async function fetchAllListings() {
  const active = "_active=true";
  const bids = "&_bids=true";
  const seller = "&_seller=true";
  const sort = "&sort=created&sortOrder=desc";
  const url = API_BASE_URL + "listings?" + active + bids + seller + sort;

  const options = makeOptions();
  const response = await fetch(url, options);
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
