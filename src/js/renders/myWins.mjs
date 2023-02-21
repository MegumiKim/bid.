import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { postListingCard } from "../templates/listingCard.mjs";
import { userAlert } from "./userAlert.mjs";

export function myWins(data) {
  const container = document.querySelector("#my-wins-container");

  const wins = data.wins;
  if (wins.length) {
    data.wins.forEach(async (win) => {
      const item = await fetchSingleEntry(win);

      postListingCard(item, container);
    });
  } else {
    container.innerHTML = "You have not won any item yet.";
  }
}
