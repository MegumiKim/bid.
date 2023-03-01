import { load } from "../storage/local.mjs";
import { show } from "./toggleDisplay.mjs";

/**
 * Display the different CTA btn in the Product Specific page, according to different cases.
 *
 * @param {object} data
 */
export const toggleCTABtn = (data) => {
  // Case - user not logged in.
  if (!load("accessToken")) {
    show("a#loginToBidBtn");

    // Case - user logged in
  } else {
    const seller = data.seller.email;
    const myEmail = load("userDetails").email;

    // Case - user is the owner of the product
    if (seller === myEmail) {
      show("button#editBtn");
      show("button#deleteBtn");

      // Case - user is NOT the owner of the product
    } else {
      const favBtn = document.querySelector("#favBtn");
      show("button#bidBtn");
      show("button#favBtn");

      // Case - product is already added in my Favorite
      if (isFavorite(data)) {
        favBtn.innerText = "Remove From Favorite";
      }
    }
  }
};
