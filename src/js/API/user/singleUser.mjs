import { load } from "../../storage/local.mjs";
import { API_BASE_URL } from "../constants.mjs";

export async function fetchSingleUser(name) {
  const singleProfileURL = `${API_BASE_URL}profiles/${name}?_listings=true`;
  const options = makeOptions();
  const response = await fetch(singleProfileURL, options);

  if (response.ok) {
    return await response.json();
  }
  throw new Error(JSON.stringify(response.statusText));
}

function makeOptions() {
  const accessToken = load("accessToken");
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
