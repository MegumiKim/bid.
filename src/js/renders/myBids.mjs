import { fetchMyBids } from "../API/listings/fetchMybids.mjs";
import { postMyBidCards } from "../templates/myBidCards.mjs";
import { getParam } from "../tools/getParam.mjs";
import { userAlert } from "./userAlert.mjs";

export const myBids = async () => {
  const container = document.querySelector("#my-bids-container");
  const name = getParam("name");

  try {
    container.clearHTML();
    const myBids = await fetchMyBids(name);
    myBids.forEach((bid) => {
      postMyBidCards(bid.listing, bid.amount, container);
    });
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
