import * as storage from "../../storage/local.mjs";
/**
 * Remove token and userDetails from local storage and redirect the user to main page
 */
export function logout() {
  const logoutBtn = document.querySelector("#logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (event) => {
      event.preventDefault();
      storage.remove("accessToken");
      storage.remove("userDetails");
      window.location.replace("/");
    });
  }
}
