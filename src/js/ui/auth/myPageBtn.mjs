// import { myPageBtnListener } from "../../listeners/profiles/myPageBtn.mjs";
import * as listeners from "../../listeners/index.mjs";

export const myPageBtn = () => {
  document
    .querySelector("#my-page")
    .addEventListener("click", listeners.myPageBtnListener);
};
// export const myPageLink = () => {
//   document
//     .querySelector("#my-page-link")
//     .addEventListener("click", myPageBtnListener);
// };
