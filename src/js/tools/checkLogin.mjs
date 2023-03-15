import { load } from "../storage/local.mjs";
import * as tool from "../tools/index.mjs";
import * as template from "../templates/creditNAV.mjs";

/**
 * Check whether the user is logged-in or not,
 * and change the visibility of CTA/Nav Btns accordingly.
 */
export async function checkLogin() {
  const navBtn = document.querySelector("#navBtn");
  const container = document.querySelector("#welcome-btns");
  const unLoggedInNav = document.querySelector(".welcome-stranger");

  // For logged-in user
  if (load("accessToken")) {
    if (container) {
      tool.show("#create-btn");
    }
    tool.show("#navBtn");
    tool.show(".welcome-user");

    const avatar = load("userDetails").avatar
      ? load("userDetails").avatar
      : "../../../asset/img/avatar-placeholder.png";

    navBtn.src = avatar;
    template.postCreditNAV();
  } else {
    // For un-logged-in users
    if (container) {
      tool.show("#login-CTA");
      tool.show("#signup-CTA");
    }
    tool.show(".welcome-stranger");
    unLoggedInNav.classList.add("d-sm-flex");
    tool.hide("#navBtn");
  }
}
