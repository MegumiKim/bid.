import * as sort from "../sort/sort.mjs";
import * as template from "../../templates/index.mjs";
/**
 *  * Sorts out the item with the most bids and renders in the featured item container
 * @param {*} container
 * @param {array} listings
 */
export function renderMostPopular(container, listings) {
  const item = sort.mostPopular(listings)[0];

  container.clearHTML();
  template.postListingCard(item, container);
}
