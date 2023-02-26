import { postListingCard } from "../../templates/listingCard.mjs";
import { clearHTML } from "../../tools/clear.mjs";
import { endingSoon } from "./sort.mjs";

export function renderExpiring(container, listings) {
  const expiringItem = endingSoon(listings)[0];

  container.clearHTML();
  postListingCard(expiringItem, container);
}
