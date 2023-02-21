import { load } from "../storage/local.mjs";
import { clearHTML } from "./clear.mjs";

export function checkLogin() {
  // const navLink = document.querySelector("#nav-link");
  // navLink.clearHTML();
  const mainCTA = document.querySelector("#btn-CTA");
  const loginCTA = document.querySelector("#login-CTA");
  const signupCTA = document.querySelector("#signup-CTA");
  const navBtn = document.querySelector("#navBtn");
  const welcomeStranger = document.querySelector(".welcome-stranger");
  const nameContainer = document.querySelector(".user-name");
  const username = load("userDetails").name;
  if (load("accessToken")) {
    if (mainCTA) {
      loginCTA.classList.add("d-none");
      signupCTA.classList.add("d-none");
    }
    welcomeStranger.classList.add("d-none");
    nameContainer.innerText = `Hi ${username}!`;
    const avatar = load("userDetails").avatar;
    navBtn.src = avatar;

    const myPoint = load("credits");
    const pointsContainer = document.querySelector("#points-display");
    pointsContainer.innerHTML = `<small>💰 ${myPoint} pt</small>`;
  } else {
    if (mainCTA) {
      mainCTA.classList.add("d-none");
    }
    const loginLink = `<a href="../../../login/" class="me-3" >Login</a>`;
    // navLink.innerHTML = loginLink;
    navBtn.style.display = "none";
  }
}
