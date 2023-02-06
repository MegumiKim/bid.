import { loginListener } from "../../listeners/index.mjs";

export const loginForm = () => {
  console.log("hi");
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginListener);
};
