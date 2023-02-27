import * as ui from "../ui/index.mjs";
import * as render from "../renders/index.mjs";
import * as listeners from "../listeners/index.mjs";
import { checkLogin } from "../tools/checkLogin.mjs";

const path = location.pathname;

export function router() {
  if (path === "/index.html" || path === "/") {
    ui.prevBtn();
    ui.nextBtn();
    render.listings();
    ui.myPageBtn();
    listeners.logout();
    checkLogin();
  } else if (path === "/signup/") {
    ui.signupForm();
  } else if (path === "/login/") {
    ui.loginForm();
  } else if (path === "/product/") {
    render.singleEntry();
    listeners.logout();
    ui.myPageBtn();
    checkLogin();
  } else if (path === "/profile/") {
    render.myPage();
    render.myBids();
    render.myListings();
    listeners.logout();
    ui.createListingForm();
    ui.editAvatar();
    checkLogin();
  }
}
