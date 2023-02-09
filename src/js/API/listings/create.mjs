import { API_BASE_URL } from "../constants.mjs";
import { load } from "../../storage/local.mjs";

export async function createListing(body) {
  const createListingURL = `${API_BASE_URL}listings`;
  const options = makeOptions(body);
  console.log(options);
  const response = await fetch(createListingURL, options);
  console.log(response);

  if (response.ok) {
    return await response.json();
  }
  throw new Error(JSON.stringify(response.statusText));
}

/** returns fetch options with body/auth */
function makeOptions(body) {
  const token = load("accessToken");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  return options;
}
