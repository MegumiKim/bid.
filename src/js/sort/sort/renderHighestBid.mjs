import * as sort from "../sort/sort.mjs";
import * as template from "../../templates/index.mjs";
import { clearHTML } from "../../tools/clear.mjs";

export function renderHighestBid(container, listings) {
  const item = sort.highest(listings)[0];

  container.clearHTML();
  template.postListingCard(item, container);
}
