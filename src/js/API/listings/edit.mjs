import { API_BASE_URL } from "../constants.mjs";
import { load } from "../../storage/local.mjs";

export async function editListing(body, id) {
  const URL = `${API_BASE_URL}listings/${id}`;
  const options = makeOptions(body);
  const response = await fetch(URL, options);
  console.log(options);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error(JSON.stringify(response.statusText));
}

/** returns fetch options with body/auth */
function makeOptions(body) {
  const token = load("accessToken");
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  return options;
}
