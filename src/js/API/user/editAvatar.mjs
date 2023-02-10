import { API_BASE_URL } from "../constants.mjs";
import { load } from "../../storage/local.mjs";

export async function editAvatar(name, body) {
  const createListingURL = `${API_BASE_URL}profiles/${name}/media`;
  const options = makeOptions(body);
  const response = await fetch(createListingURL, options);

  if (response.ok) {
    return await response.json();
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
