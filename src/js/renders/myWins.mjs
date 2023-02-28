import * as render from "../renders/index.mjs";
import * as storage from "../storage/session.mjs";

export function myWins(data) {
  const container = document.querySelector("#my-wins-container");
  const wins = data.wins;
  const myBids = storage.load("myBids");
  const accordionBtn = document.querySelector("#myWinsBtn");
  console.log(myBids);

  let myWins = [];

  wins.forEach((win) => {
    const itemExists = myBids.find(function (bid) {
      return bid.listing.id === win;
    });
    myWins.push(itemExists.listing);
  });

  if (myWins.length) {
    console.log(myWins);
    accordionBtn.innerText = `My Wins (${myWins.length})`;
    render.renderCards(myWins, container);
  } else {
    container.innerHTML = `<p class="text-light">You have no listings yet.</p>`;
  }
}
