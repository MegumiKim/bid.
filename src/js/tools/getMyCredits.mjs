import { fetchSingleUser } from "../API/user/singleUser.mjs";
import { load } from "../storage/local.mjs";

export async function getMyCredits() {
  const name = load("userDetails").name;
  const { credits } = await fetchSingleUser(name);
  return credits;
}
