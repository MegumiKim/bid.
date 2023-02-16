import { API_BASE_URL } from "../../API/constants.mjs";

// const allListingsURL = `${API_BASE_URL}listings?_active=true&limit=50`;

const limit = "limit=50";
const active = "&_active=true";
const bids = "&_bids=true";
const seller = "&_seller=true";
const sort = "&sort=created&sortOrder=desc";
const url = API_BASE_URL + "listings?" + limit + active + bids + seller + sort;
// const url = `${API_BASE_URL}listings?${limit}&${active}&${sort}&_bids=true&_seller=true`;

export async function fetchListings() {
  const options = makeOptions();
  const response = await fetch(url, options);
  const result = await response.json();

  if (response.ok) {
    return result;
  }
  throw new Error(JSON.stringify(result.errors));
}

function makeOptions() {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}
