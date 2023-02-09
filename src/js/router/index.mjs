import * as qs from "../querySelectors/index.mjs";
import * as render from "../renders/index.mjs";

const path = location.pathname;

export function router() {
  if (path === "/index.html" || path === "/") {
    render.allListings();
    qs.myPageBtn();
  } else if (path === "/signup/") {
    qs.signupForm();
  } else if (path === "/login/") {
    qs.loginForm();
  } else if (path === "/product/") {
    render.singleEntry();
    qs.myPageBtn();
  } else if (path === "/profile/") {
    render.myPage();
    qs.createListingForm();
  }
}
