import { postListingCard } from "../templates/listingCard.mjs";
import { getParam } from "../tools/getParam.mjs";
import { userAlert } from "./userAlert.mjs";
import * as listingAPI from "../API/listings/index.mjs";
export const myBids = async () => {
  const container = document.querySelector("#my-bids-container");
  const name = getParam("name");

  try {
    container.clearHTML();
    const myBids = await listingAPI.fetchMyBids(name);
    const myBidsBtn = document.querySelector("#myBidsBtn");
    myBidsBtn.innerText = `My Bids (${myBids.length})`;

    myBids.forEach((bid) => {
      postListingCard(bid.listing, container, bid.amount);
    });
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
