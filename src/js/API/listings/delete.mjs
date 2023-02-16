import { API_BASE_URL } from "../constants.mjs";
import { load } from "../../storage/local.mjs";

export async function deleteListing(id) {
  const URL = `${API_BASE_URL}listings/${id}`;
  const options = makeOptions();
  const response = await fetch(URL, options);

  console.log(response);
  if (response.ok) {
    return;
  }
  throw new Error(JSON.stringify(response.statusText));
}

/** returns fetch options with body/auth */
function makeOptions() {
  const token = load("accessToken");
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  return options;
}
