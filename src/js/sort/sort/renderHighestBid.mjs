import { postListingCard } from "../../templates/listingCard.mjs";
import { clearHTML } from "../../tools/clear.mjs";
import * as sort from "../sort/sort.mjs";

export function renderHighestBid(container, listings) {
  const item = sort.highest(listings)[0];

  container.clearHTML();
  postListingCard(item, container);
}
