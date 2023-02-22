import { load, save } from "../storage/session.mjs";
import { renderOffsetListings } from "./offsetListings.mjs";
import { fetchAllListings } from "../API/listings/fetchAllListings.mjs";
import * as ui from "../ui/index.mjs";

export async function listings() {
  const allListings = await fetchAllListings();
  save("cached-listings", allListings);
  let listings = load("cached-listings");

  ui.sortBtn(listings);
  ui.searchInput();
  ui.prevBtn(listings);
  ui.nextBtn(listings);
  renderOffsetListings(allListings, 0);
}
