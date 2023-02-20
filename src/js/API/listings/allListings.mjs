import { API_BASE_URL } from "../../API/constants.mjs";

export async function fetchListings(
  offsetNum = 0,
  sortOrder = "created&sortOrder=desc"
) {
  const limit = "limit=12";
  const offset = `&offset=${offsetNum}`;
  const active = "&_active=true";
  const bids = "&_bids=true";
  const seller = "&_seller=true";
  const sort = `&sort=${sortOrder}`;
  const url =
    API_BASE_URL + "listings?" + limit + active + bids + seller + sort + offset;

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
