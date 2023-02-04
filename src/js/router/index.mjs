const path = location.pathname;

export function router() {
  if (path === "/signup/") {
    console.log("this is sign-up page");
  } else if (path === "/login/") {
    console.log("this is login page");
  }
}
