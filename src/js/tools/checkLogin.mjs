import { load } from "../storage/local.mjs";
import { clearHTML } from "./clear.mjs";
import { hide } from "./toggleDisplay.mjs";
export function checkLogin() {
  // const navLink = document.querySelector("#nav-link");
  // navLink.clearHTML();
  const mainCTA = document.querySelector("#btn-CTA");
  const loginCTA = document.querySelector("#login-CTA");
  const signupCTA = document.querySelector("#signup-CTA");
  const navBtn = document.querySelector("#navBtn");
  const welcomeStranger = document.querySelector(".welcome-stranger");
  const nameContainer = document.querySelector(".user-name");

  if (load("accessToken")) {
    const username = load("userDetails").name;
    if (mainCTA) {
      // hide(loginCTA);
      // hide(signupCTA);
      loginCTA.classList.add("d-none");
      signupCTA.classList.add("d-none");
    }
    // hide(welcomeStranger);
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
      // hide(mainCTA);
    }
    navBtn.style.display = "none";
  }
}
