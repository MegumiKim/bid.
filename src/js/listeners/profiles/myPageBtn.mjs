import { load } from "../../storage/local.mjs";

/**
 * Add user name in query parameter
 * in URL and jump to user's profile page
 *
 */
export function myPageBtnListener() {
  const myName = load("userDetails").name;
  window.location.replace(`/profile/?name=${myName}`);
}
