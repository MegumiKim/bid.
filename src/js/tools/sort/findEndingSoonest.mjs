// import { renderCard } from "../../renders/renderCard.mjs";
import { load } from "../../storage/session.mjs";
import { postListingCard } from "../../templates/listingCard.mjs";
import { clearHTML } from "../clear.mjs";
import { endingSoon } from "./sort.mjs";

export function renderEndingSoonest(container) {
  const listings = load("cached-listings");
  const expiringItem = endingSoon(listings)[0];

  container.clearHTML();
  postListingCard(expiringItem, container);
  // renderCard(container, expiringItem, ".card");
}
