import { postListingCard } from "../../templates/listingCard.mjs";
import { clearHTML } from "../../tools/clear.mjs";
import * as sort from "../sort/sort.mjs";

/**
 *  * Sorts out the item with the most bids and renders in the featured item container
 * @param {*} container
 * @param {array} listings
 */
export function renderMostPopular(container, listings) {
  const item = sort.mostPopular(listings)[0];

  container.clearHTML();
  postListingCard(item, container);
}
