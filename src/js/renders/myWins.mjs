import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { postListingCard } from "../templates/listingCard.mjs";

export function myWins(data) {
  const container = document.querySelector("#my-wins-container");

  const wins = data.wins;

  const accordionBtn = document.querySelector("#myWinsBtn");
  accordionBtn.innerText = `My Wins (${wins.length})`;
  if (wins.length) {
    data.wins.forEach(async (win) => {
      const item = await fetchSingleEntry(win);
      postListingCard(item, container);
    });
  } else {
    container.innerHTML =
      "<p class='text-light'>You have not won any item yet.</p>";
  }
}
