import { load } from "../storage/local.mjs";
import { clearHTML } from "./clear.mjs";

export function checkLogin() {
  const navLink = document.querySelector("#nav-link");
  navLink.clearHTML();

  if (load("accessToken")) {
    const navBtn = document.querySelector("#navBtn");
    const welcomeBtn = document.querySelector("#welcome-btns");

    const avatar = load("userDetails").avatar;
    navBtn.src = avatar;

    const myPoint = load("credits");
    const pointsContainer = document.querySelector("#points-display");
    pointsContainer.innerHTML = `<small>You have ${myPoint} pt</small>`;

    if (welcomeBtn) {
      welcomeBtn.innerHTML = `<a
      href="#search-section"
      type="button"
      class="btn btn-outline-secondary btn-md px-4 me-sm-2"
    >Explore</a>`;
    }
  } else {
    const loginLink = `<a href="../../../login/" class="me-3" >Login</a>`;
    navLink.innerHTML = loginLink;
    navBtn.style.display = "none";
  }
}
