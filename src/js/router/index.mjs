import * as ui from "../ui/index.mjs";
import * as render from "../renders/index.mjs";
import * as listeners from "../listeners/index.mjs";
import { checkLogin } from "../tools/checkLogin.mjs";

export const routerSwitch = () => {
  const path = location.pathname;
  switch (path) {
    case "/signup/":
      ui.signupForm();
      break;

    case "/login/":
      ui.loginForm();
      break;

    case "/product/":
      render.singleEntry();
      listeners.logout();
      ui.myPageBtn();
      checkLogin();
      break;

    case "/profile/":
      render.myPage();
      listeners.logout();
      ui.createListingForm();
      ui.editAvatar();
      checkLogin();
      break;

    default:
      render.listings();
      ui.myPageBtn();
      listeners.logout();
      ui.createListingForm();
      checkLogin();

      break;
  }
};
