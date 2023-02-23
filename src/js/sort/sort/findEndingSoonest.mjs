import { load } from "../../storage/session.mjs";
import { postListingCard } from "../../templates/listingCard.mjs";
import { clearHTML } from "../../tools/clear.mjs";
import { endingSoon } from "../../sort/sort/sort.mjs";

export function renderEndingSoonest(container) {
  const listings = load("cached-listings");
  const expiringItem = endingSoon(listings)[0];

  container.clearHTML();
  postListingCard(expiringItem, container);
  // renderCard(container, expiringItem, ".card");
}
