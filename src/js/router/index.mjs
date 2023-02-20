import * as ui from "../ui/index.mjs";
import * as render from "../renders/index.mjs";
import * as listeners from "../listeners/index.mjs";

import { checkLogin } from "../tools/checkLogin.mjs";

const path = location.pathname;

export function router() {
  if (path === "/index.html" || path === "/") {
    checkLogin();
    ui.NextBtn();
    ui.prevBtn();
    render.renderAllListings(0);
    ui.myPageBtn();
    listeners.logout();
    // ui.endingSoonItem();
    // ui.searchInput();
  } else if (path === "/signup/") {
    ui.signupForm();
  } else if (path === "/login/") {
    ui.loginForm();
  } else if (path === "/product/") {
    render.singleEntry();
    ui.myPageBtn();
    listeners.logout();
    ui.bidForm();
    checkLogin();
  } else if (path === "/profile/") {
    render.myPage();
    render.myBids();
    ui.createListingForm();
    listeners.logout();
    ui.editAvatarBtn();
  }
}
