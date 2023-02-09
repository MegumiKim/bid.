import { myPageBtnListener } from "../../listeners/profiles/myPageBtn.mjs";

export const myPageBtn = () => {
  document
    .querySelector("#my-page")
    .addEventListener("click", myPageBtnListener);
};
