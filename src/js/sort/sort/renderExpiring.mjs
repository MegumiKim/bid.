import * as sort from "../sort/index.mjs";
import * as template from "../../templates/index.mjs";
import { clearHTML } from "../../tools/clear.mjs";

export function renderExpiring(container, listings) {
  const expiringItem = sort.endingSoon(listings)[0];

  container.clearHTML();
  template.postListingCard(expiringItem, container);
}
