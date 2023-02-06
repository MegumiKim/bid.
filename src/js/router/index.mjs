import * as ui from "../events/index.mjs";

const path = location.pathname;

export function router() {
  if (path === "/signup/") {
    ui.signupForm();
    console.log("this is sign-up page");
  } else if (path === "/login/") {
    console.log("this is login page");
  }
}
