import { load } from "../storage/local.mjs";
import { clearHTML } from "./clear.mjs";
import { hide } from "./toggleDisplay.mjs";
export function checkLogin() {
  // const navLink = document.querySelector("#nav-link");
  // navLink.clearHTML();
  const mainCTA = document.querySelector("#btn-CTA");
  const navBtn = document.querySelector("#navBtn");
  const nameContainer = document.querySelector(".user-name");
  // const loginCTA = document.querySelector("#login-CTA");
  // const signupCTA = document.querySelector("#signup-CTA");
  // const welcomeStranger = document.querySelector(".welcome-stranger");

  if (load("accessToken")) {
    const username = load("userDetails").name;
    if (mainCTA) {
      hide("#login-CTA");
      hide("#signup-CTA");
    }
    hide(".welcome-stranger");
    nameContainer.innerText = `Hi ${username}!`;
    const avatar = load("userDetails").avatar;
    navBtn.src = avatar;
    const myPoint = load("credits");
    const pointsContainer = document.querySelector("#points-display");
    pointsContainer.innerHTML = `<small>💰 ${myPoint} pt</small>`;
  } else {
    if (mainCTA) {
      hide("#btn-CTA");
    }
    navBtn.style.display = "none";
  }
}
