import { load } from "../storage/local.mjs";
import { hide } from "./toggleDisplay.mjs";
import { clearHTML } from "./clear.mjs";

export function checkLogin() {
  const mainCTA = document.querySelector("#create-btn");
  const navBtn = document.querySelector("#navBtn");
  const nameContainer = document.querySelector(".user-name");

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
    pointsContainer.innerHTML = `<small><img src="../../../asset/img/goldCoin.png" class="gold-coin-sm"></img> ${myPoint} pt</small>`;
  } else {
    if (mainCTA) {
      hide("#btn-CTA");
    }
    navBtn.style.display = "none";
  }
}
