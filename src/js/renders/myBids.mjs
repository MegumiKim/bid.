import * as API from "../API/index.mjs";
import * as template from "../templates/index.mjs";
import * as tool from "../tools/index.mjs";
import * as render from "./index.mjs";

export const myBids = async () => {
  const container = document.querySelector("#my-bids-container");
  const name = tool.getParam("name");
  container.clearHTML();

  try {
    const myBids = await API.bidHistory(name);
    const myBidsBtn = document.querySelector("#myBidsBtn");
    myBidsBtn.innerText = `My Bids (${myBids.length})`;

    if (myBids.length) {
      myBids.forEach((bid) => {
        template.postListingCard(bid.listing, container, bid.amount);
      });
    } else {
      container.innerHTML = `<p class="text-light">You have no bids yet.</p>`;
    }
    return myBids;
  } catch (e) {
    render.userAlert(container, "Failed to fetch data", "secondary");
  }
};
