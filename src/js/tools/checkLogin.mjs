import { load } from "../storage/local.mjs";
import { clearHTML } from "../utils/clear.mjs";
export function checkLogin() {
  if (load("accessToken")) {
    const navBtn = document.querySelector("#navBtn");
    const avatar = load("userDetails").avatar;
    navBtn.src = avatar;
  } else {
    const loginLink = `<a href="../../../login/" class="me-3" >Login</a>`;
    const navLink = document.querySelector("#nav-link");
    navLink.clearHTML();
    navLink.innerHTML = loginLink;
    navBtn.style.display = "none";
  }
}
