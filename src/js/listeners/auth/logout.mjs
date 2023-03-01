import * as storage from "../../storage/local.mjs";
/**
 * clears local storage and redirect the user to main page
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
