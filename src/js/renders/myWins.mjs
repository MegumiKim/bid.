import * as render from "../renders/index.mjs";
import * as storage from "../storage/session.mjs";
import { postListingCard } from "../templates/listingCard.mjs";

export function myWins(data) {
  const container = document.querySelector("#my-wins-container");
  const wins = data.wins;
  const myBids = storage.load("myBids");
  const accordionBtn = document.querySelector("#myWinsBtn");
  console.log(myBids);

  let myWins = [];
  if (wins.length) {
    accordionBtn.innerText = `My Wins (${wins.length})`;
    wins.forEach((win) => {
      const itemExists = myBids.find(function (bid) {
        return bid.listing.id === win;
      });
      myWins.push(itemExists);
    });
    myWins.forEach((win) => {
      console.log(win);
      postListingCard(win.listing, container, win.amount);
    });
  } else {
    container.innerHTML = `<p class="text-light">You have no listings yet.</p>`;
  }
}
