import { API_BASE_URL } from "../constants.mjs";
import { load } from "../../storage/local.mjs";

export async function makeBid(id, body) {
  const URL = `${API_BASE_URL}listings/${id}/bids`;
  const options = makeOptions(body);
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
