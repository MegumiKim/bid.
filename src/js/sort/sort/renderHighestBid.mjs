import * as sort from "../sort/sort.mjs";
import * as template from "../../templates/index.mjs";
import { clearHTML } from "../../tools/clear.mjs";
/**
 *  * Sorts out the highest bid item and renders in the featured item container
 * @param {*} container
 * @param {array} listings
 */
export function renderHighestBid(container, listings) {
  const item = sort.highest(listings)[0];

  container.clearHTML();
  template.postListingCard(item, container);
}
