import { load } from "../storage/local.mjs";
import { clearHTML } from "../utils/clear.mjs";
export function checkLogin() {
  if (load("accessToken")) {
    const navBtn = document.querySelector("#navBtn");
    const welcomeBtns = document.querySelector("#welcome-btns");

    const avatar = load("userDetails").avatar;
    navBtn.src = avatar;

    if (welcomeBtns) {
      welcomeBtns.innerHTML = `<a
      href="#search-section"
      type="button"
      class="btn btn-outline-secondary btn-md px-4 me-sm-2"
    >Start Auction</a>`;
    }
  } else {
    const loginLink = `<a href="../../../login/" class="me-3" >Login</a>`;
    const navLink = document.querySelector("#nav-link");
    navLink.clearHTML();
    navLink.innerHTML = loginLink;
    navBtn.style.display = "none";
  }
}
