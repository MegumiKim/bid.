import * as qs from "../querySelectors/index.mjs";
import { renderAllListings } from "../renders/allListings.mjs";

const path = location.pathname;

export function router() {
  if (path === "/index.html") {
    renderAllListings();
  } else if (path === "/signup/") {
    qs.signupForm();
  } else if (path === "/login/") {
    qs.loginForm();
  }
}
