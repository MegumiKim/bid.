import { fetchListings } from "../API/listings/allListings.mjs";
import { save } from "../storage/session.mjs";
import { renderCard } from "./renderCard.mjs";
import { debounce } from "../tools/filters/debounce.mjs";
import { onSearch } from "../listeners/listings/onSearch.mjs";
import { onChangeSortSelect } from "../tools/sort/sort.mjs";
import { mostPopular } from "../tools/filters/mostPopular.mjs";
import { clearHTML } from "../utils/clear.mjs";

export const allListings = async () => {
  const container = document.querySelector("#listings-container");
  const mostPopularContainer = document.querySelector(
    "#most-popular-container"
  );
  const search = document.querySelector("#search");
  const select = document.querySelector("select#sort");

  try {
    container.clearHTML();
    const listings = await fetchListings();
    save("cached-listings", listings);

    mostPopular(container);

    listings.forEach((data) => {
      renderCard(container, data, ".card");
    });

    select.addEventListener("change", (event) =>
      onChangeSortSelect(event, container)
    );

    search.addEventListener(
      "input",
      debounce((event) => onSearch(event, listings, container), 300)
    );
  } catch (e) {
    console.log(e);
  }
};
