import * as render from "./index.mjs";
import * as storage from "../storage/local.mjs";

export const myFavorites = async () => {
  const container = document.querySelector("#my-favs-container");

  try {
    const listings = storage.load("favorite") ? storage.load("favorite") : [];

    const accordionBtn = document.querySelector("#myFavBtn");
    if (!listings.length) {
      accordionBtn.innerText = `My Favorites (0)`;
      container.innerHTML = "<p class='text-light'>No Favorite item saved</p>";
    } else {
      accordionBtn.innerText = `My Favorites (${listings.length})`;
      render.renderCards(listings, container);
    }
  } catch (e) {
    render.userAlert(container, "failed to fetch data", "secondary");
    console.warn(e);
  }
};
