import * as API from "../API/index.mjs";
import * as template from "../templates/index.mjs";
import * as tool from "../tools/index.mjs";
import * as render from "./index.mjs";
import { clearHTML } from "../tools/clear.mjs";

export const myBids = async () => {
  const container = document.querySelector("#my-bids-container");
  const name = tool.getParam("name");

  try {
    container.clearHTML();
    const myBids = await API.bidRecords(name);
    const myBidsBtn = document.querySelector("#myBidsBtn");
    myBidsBtn.innerText = `My Bids (${myBids.length})`;

    myBids.forEach((bid) => {
      template.postListingCard(bid.listing, container, bid.amount);
    });
  } catch (e) {
    render.userAlert(container, e.message, "secondary");
  }
};
