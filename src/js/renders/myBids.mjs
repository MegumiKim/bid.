import { fetchMyBids } from "../API/listings/fetchMyBids.mjs";
import { postListingCard } from "../templates/listingCard.mjs";
import { getParam } from "../tools/getParam.mjs";
import { userAlert } from "./userAlert.mjs";

export const myBids = async () => {
  const container = document.querySelector("#my-bids-container");
  const name = getParam("name");

  try {
    container.clearHTML();
    const myBids = await fetchMyBids(name);
    const myBidsBtn = document.querySelector("#myBidsBtn");
    myBidsBtn.innerText = `My Bids (${myBids.length})`;

    myBids.forEach((bid) => {
      console.log(bid);
      postListingCard(bid.listing, container, bid.amount);
    });
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
