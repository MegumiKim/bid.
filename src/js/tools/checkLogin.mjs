import { load } from "../storage/local.mjs";
import { clearHTML } from "./clear.mjs";
import * as tool from "../tools/index.mjs";

/**
 * Check whether the user is logged-in or not,
 * and change the visibility of CTA/Nav Btns accordingly.
 */
export async function checkLogin() {
  const navBtn = document.querySelector("#navBtn");
  const nameContainer = document.querySelector(".user-name");
  const container = document.querySelector("#welcome-btns");

  // For logged-in user
  if (load("accessToken")) {
    const username = load("userDetails").name;
    if (container) {
      tool.show("#create-btn");
    }

    nameContainer.innerText = `Hi ${username}!`;
    tool.show("#navBtn");
    tool.show(".welcome-user");

    const avatar = load("userDetails").avatar
      ? load("userDetails").avatar
      : "../../../asset/img/avatar-placeholder.png";

    navBtn.src = avatar;

    const myPoint = load("credits");
    const pointsContainer = document.querySelector("#points-display");
    pointsContainer.innerHTML = pointsHTML(myPoint);
  } else {
    // For un-logged-in users
    if (container) {
      tool.show("#login-CTA");
      tool.show("#signup-CTA");
    }
    tool.show(".welcome-stranger");
    tool.hide("#navBtn");
  }
}

const pointsHTML = (myPoint) => {
  return `<small><img src="../../../asset/img/coin.png" class="gold-coin-sm mb-1" alt="bid point icon"></img> ${myPoint} pt</small>`;
};
