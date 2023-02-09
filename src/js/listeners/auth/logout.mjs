import { remove } from "../../storage/local.mjs";
import { clear } from "../../storage/local.mjs";
/**
 * remove the access token from local storage and redirect the user to log in page
 */
export function logout() {
  const logoutBtn = document.querySelector("#logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (event) => {
      event.preventDefault();
      // remove("accessToken");
      clear();
      window.location.replace("/");
    });
  }
}
