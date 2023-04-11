import * as template from "../templates/listingCard.mjs";
import * as sort from "../sort/sort/index.mjs";
import * as render from "../renders/index.mjs";

export function myWins(data, myBids) {
  const container = document.querySelector("#my-wins-container");
  container.clearHTML();

  try {
    const wins = data.wins;

    document.querySelector("#myWinsBtn").innerText = `My Wins (${wins.length})`;

    let myWins = [];
    if (wins.length) {
      wins.forEach((win) => {
        const itemExists = myBids.find(function (bid) {
          return bid.listing.id === win;
        });
        myWins.push(itemExists);
      });
      const sortedWins = sort.latest(myWins);
      sortedWins.forEach((win) => {
        template.postListingCard(win.listing, container, win.amount);
      });
    } else {
      container.innerHTML = `<p class="text-light">You have no wins yet.</p>`;
    }
  } catch (e) {
    render.userAlert(container, "Failed to fetch data", "danger");
    console.warn(e);
  }
}
