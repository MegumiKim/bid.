import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { getParam } from "../utils/getParam.mjs";
import { carousel } from "../templates/createElements/carousel.mjs";
import Listing from "../Classes/Listing.mjs";

export const singleEntry = async () => {
  const container = document.querySelector("#product-container");
  const carouselContainer = document.querySelector("#carousel-container");
  const descriptionContainer = document.querySelector("#product-description");
  container.innerHTML = "";
  carouselContainer.innerHTML = "";
  const id = getParam("id");

  try {
    const data = await fetchSingleEntry(id);
    console.log(data);
    carousel(data, carouselContainer);

    const listing = new Listing(data);
    listing.render(container, descriptionContainer);

    console.log(listing.remainingTime);
  } catch (e) {
    console.log(e);
  }
};
