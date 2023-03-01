import * as API from "../API/index.mjs";
import * as storage from "../storage/local.mjs";
/**
 * check the user name stored in local storage and fetch the credit balance from API.
 */
export async function getMyCredits() {
  const name = storage.load("userDetails").name;
  const { credits } = await API.fetchSingleUser(name);
  return credits;
}
