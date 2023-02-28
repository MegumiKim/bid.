import * as API from "../API/index.mjs";
import * as template from "../templates/index.mjs";
import * as tool from "../tools/index.mjs";
import * as render from "./index.mjs";
import { clearHTML } from "../tools/clear.mjs";
import * as storage from "../storage/session.mjs";

export const myBids = async () => {
  const container = document.querySelector("#my-bids-container");
  const name = tool.getParam("name");

  try {
    container.clearHTML();
    const myBids = await API.bidRecords(name);
    storage.save("myBids", myBids);
    const myBidsBtn = document.querySelector("#myBidsBtn");
    myBidsBtn.innerText = `My Bids (${myBids.length})`;

    if (myBids.length) {
      myBids.forEach((bid) => {
        template.postListingCard(bid.listing, container, bid.amount);
      });
    } else {
      container.innerHTML = `<p class="text-light">You have no bids yet.</p>`;
    }
  } catch (e) {
    render.userAlert(container, e.message, "secondary");
  }
};
