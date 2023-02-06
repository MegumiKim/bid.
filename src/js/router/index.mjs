import * as events from "../events/index.mjs";
import { renderAllListings } from "../renders/allListings.mjs";

const path = location.pathname;

export function router() {
  if (path === "/index.html") {
    renderAllListings();
  } else if (path === "/signup/") {
    events.signupForm();
  } else if (path === "/login/") {
    events.loginForm();
  }
}
