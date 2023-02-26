// import { signUpListener } from "../../listeners/index.mjs";
import * as listeners from "../../listeners/index.mjs";
export const signupForm = () => {
  document
    .querySelector("#signup-form")
    .addEventListener("submit", listeners.signUpListener);
};
