import { load } from "../storage/local.mjs";
import { show, hide } from "../tools/toggleDisplay.mjs";
import { clearHTML } from "./clear.mjs";

export function checkLogin() {
  const navBtn = document.querySelector("#navBtn");
  const nameContainer = document.querySelector(".user-name");
  const container = document.querySelector("#welcome-btns");

  if (load("accessToken")) {
    const username = load("userDetails").name;
    if (container) {
      show("#create-btn");
    }

    nameContainer.innerText = `Hi ${username}!`;
    show("#navBtn");
    show(".welcome-user");

    const avatar = load("userDetails").avatar
      ? load("userDetails").avatar
      : "../../../asset/img/avatar-placeholder.png";

    navBtn.src = avatar;

    const myPoint = load("credits");
    const pointsContainer = document.querySelector("#points-display");
    pointsContainer.innerHTML = `<small><img src="../../../asset/img/coin.png" class="gold-coin-sm mb-1" alt="cash point icon"></img> ${myPoint} pt</small>`;
  } else {
    if (container) {
      show("#login-CTA");
      show("#signup-CTA");
    }
    // hide("#navBtn");
    show(".welcome-stranger");
    hide("#navBtn");
  }
}
