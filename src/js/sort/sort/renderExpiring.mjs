import * as sort from "../sort/index.mjs";
import * as template from "../../templates/index.mjs";

/**
 * Sorts out the item which expires the soonest and renders in the featured item container
 * @param {*} container
 * @param {array} listings
 */
export function renderExpiring(container, listings) {
  const expiringItem = sort.endingSoon(listings)[0];

  container.clearHTML();
  template.postListingCard(expiringItem, container);
}
