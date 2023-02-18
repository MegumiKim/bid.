import * as qs from "../querySelectors/index.mjs";
import * as render from "../renders/index.mjs";
import * as listeners from "../listeners/index.mjs";

import { checkLogin } from "../tools/checkLogin.mjs";

const path = location.pathname;

export function router() {
  if (path === "/index.html" || path === "/") {
    checkLogin();
    qs.NextBtn();
    qs.prevBtn();
    render.renderAllListings(0);
    qs.myPageBtn();
    listeners.logout();
    qs.endingSoonItem();
    // qs.searchInput();
  } else if (path === "/signup/") {
    qs.signupForm();
  } else if (path === "/login/") {
    qs.loginForm();
  } else if (path === "/product/") {
    render.singleEntry();
    qs.myPageBtn();
    listeners.logout();
    qs.bidForm();
    checkLogin();
  } else if (path === "/profile/") {
    render.myPage();
    qs.createListingForm();
    listeners.logout();
    qs.editAvatarBtn();
  }
}
