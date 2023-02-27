import * as API from "../API/index.mjs";
import * as storage from "../storage/index.mjs";
export async function getMyCredits() {
  const name = storage.load("userDetails").name;
  const { credits } = await API.fetchSingleUser(name);
  return credits;
}
