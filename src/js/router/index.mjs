import * as events from "../events/index.mjs";

const path = location.pathname;

export function router() {
  if (path === "/signup/") {
    events.signupForm();
  } else if (path === "/login/") {
    events.loginForm();
  }
}
