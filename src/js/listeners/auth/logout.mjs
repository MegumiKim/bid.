import * as storage from "../../storage/index.mjs";
/**
 * remove the access token from local storage and redirect the user to log in page
 */
export function logout() {
  const logoutBtn = document.querySelector("#logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (event) => {
      event.preventDefault();
      storage.clear();
      window.location.replace("/");
    });
  }
}
