import { load } from "../../storage/local.mjs";
import { API_BASE_URL } from "../constants.mjs";

export async function bidRecords(name) {
  const URL = `${API_BASE_URL}profiles/${name}/bids?_listings=true&_bids=true`;
  const options = makeOptions();
  const response = await fetch(URL, options);
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
  const accessToken = load("accessToken");
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
