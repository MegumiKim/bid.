import { getParam } from "../utils/getParam.mjs";
import { fetchMyBids } from "../API/listings/fetchMybids.mjs";
import { userAlert } from "./userAlert.mjs";
import { clearHTML } from "../utils/clear.mjs";
import { postListingCard } from "../templates/listingCard.mjs";

export const myBids = async () => {
  const container = document.querySelector("#my-bids-container");

  container.clearHTML();

  const name = getParam("name");

  try {
    const myBids = await fetchMyBids(name);
    myBids.forEach((bid) => {
      postListingCard(bid.listing, container);
    });
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
