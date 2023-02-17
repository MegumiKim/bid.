import { fetchListings } from "../API/listings/allListings.mjs";
import { save } from "../storage/session.mjs";
import { renderCard } from "./renderCard.mjs";
import { debounce } from "../tools/filters/debounce.mjs";
import { onSearch } from "../listeners/listings/onSearch.mjs";
import { onChangeSortSelect } from "../tools/sort/sort.mjs";
import { mostPopular } from "../tools/filters/mostPopular.mjs";
import { clearHTML } from "../utils/clear.mjs";
import { userAlert } from "./userAlert.mjs";

export const allListings = async () => {
  const container = document.querySelector("#listings-container");
  // const mostPopularContainer = document.querySelector(
  //   "#most-popular-container"
  // );
  const search = document.querySelector("#search");
  const select = document.querySelector("select#sort");

  try {
    container.clearHTML();
    const listings = await fetchListings();
    console.log(listings);
    save("cached-listings", listings);
    // mostPopular(container);

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
    userAlert(container, e.message, "secondary");
  }
};

let perPage = 12;
let currentPage = 1;
let offset = 0;
function prevPage() {
  if (currentPage > 1) {
    offset = (currentPage - 1) * perPage;
    currentPage--;
  } else {
    offset = 0;
  }
  renderAllListings(offset);
}

function nextPage() {
  // / if (currentPage * pageSize < listings.length) {
  offset = currentPage * perPage;
  currentPage++;
  renderAllListings(offset);
}

document.querySelector("#prevBtn").addEventListener("click", prevPage);
document.querySelector("#nextBtn").addEventListener("click", nextPage);

async function renderAllListings(offset) {
  const container = document.querySelector("#listings-container");

  try {
    container.clearHTML();
    const listings = await fetchListings(offset);

    console.log(listings);
    listings.forEach((data) => {
      renderCard(container, data, ".card");
    });
  } catch (e) {
    console.log(e);
  }
}
