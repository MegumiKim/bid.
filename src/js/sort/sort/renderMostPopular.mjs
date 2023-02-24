import { postListingCard } from "../../templates/listingCard.mjs";
import { clearHTML } from "../../tools/clear.mjs";
import * as sort from "../sort/sort.mjs";

export function renderMostPopular(container, listings) {
  const item = sort.mostPopular(listings)[0];

  container.clearHTML();
  postListingCard(item, container);
}
