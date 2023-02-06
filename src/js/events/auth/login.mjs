import { loginListener } from "../../listeners/index.mjs";

export const loginForm = () => {
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginListener);
};
