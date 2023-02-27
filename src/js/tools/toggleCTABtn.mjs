import { load } from "../storage/local.mjs";
import { show } from "./toggleDisplay.mjs";
export const toggleCTABtn = (data) => {
  if (!load("accessToken")) {
    show("a#loginToBidBtn");
  } else {
    const seller = data.seller.email;
    const myEmail = load("userDetails").email
      ? load("userDetails").email
      : "Unauthorized user";

    if (seller === myEmail) {
      show("button#editBtn");
      show("button#deleteBtn");
    } else {
      show("button#bidBtn");
      show("button#favBtn");
    }
  }
};
