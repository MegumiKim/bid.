import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { getParam } from "../utils/getParam.mjs";
import { carousel } from "../templates/createElements/carousel.mjs";
import Listing from "../Classes/Listing.mjs";
import { showEditBtn } from "../tools/showEditBtn.mjs";

export const singleEntry = async () => {
  const container = document.querySelector("#product-container");
  const carouselContainer = document.querySelector("#carousel-container");
  const descriptionContainer = document.querySelector("#product-description");
  const bidContainer = document.querySelector("#bid-info-container");
  container.innerHTML = "";
  carouselContainer.innerHTML = "";
  descriptionContainer.innerHTML = "";
  bidContainer.innerHTML = "";

  const id = getParam("id");

  try {
    const data = await fetchSingleEntry(id);
    carousel(data, carouselContainer);

    const listing = new Listing(data);
    listing.render(container, descriptionContainer);
    listing.renderBidInfo(bidContainer);

    showEditBtn(data);
  } catch (e) {
    console.log(e);
  }
};
