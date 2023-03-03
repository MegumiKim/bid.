import { load } from "../storage/local.mjs";
import * as tool from "./index.mjs";
/**
 * Display the different CTA btn in the Product Specific page, according to different cases.
 *
 * @param {object} data
 */
export const toggleCTABtn = (data) => {
  const favBtn = document.querySelector("#favBtn");

  // Case - user not logged in.
  if (!load("accessToken")) {
    tool.show("a#loginToBidBtn");

    // Case - user logged in
  } else {
    const seller = data.seller.email;
    const myEmail = load("userDetails").email;

    // Case - user is the owner of the product
    if (seller === myEmail) {
      tool.show("button#editBtn");
      tool.show("button#deleteBtn");

      // Case - user is NOT the owner of the product
    } else {
      if (!tool.remainingTime(data.endsAt === "Expired")) {
        tool.show("button#bidBtn");
        tool.show("button#favBtn");

        // Case - product is already added in my Favorite
        if (tool.isFavorite(data)) {
          favBtn.innerText = "Remove From Favorite";
        }
      } else {
        tool.show("div#sold");
      }
    }
  }
};
