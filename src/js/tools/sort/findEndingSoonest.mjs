import { renderCard } from "../../renders/renderCard.mjs";
import { load } from "../../storage/session.mjs";
import { clearHTML } from "../../utils/clear.mjs";
import { endingSoon } from "./sort.mjs";

export function renderEndingSoonest(container) {
  const listings = load("cached-listings");
  const expiringItem = endingSoon(listings)[0];

  container.clearHTML();
  renderCard(container, expiringItem, ".card");
}
