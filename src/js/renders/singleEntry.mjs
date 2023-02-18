import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { getParam } from "../utils/getParam.mjs";
import { carousel } from "../templates/createElements/carousel.mjs";
import Listing from "../Classes/Listing.mjs";
import { showEditBtn } from "../tools/showEditBtn.mjs";
import { editForm } from "../querySelectors/listings/editForm.mjs";
import { deleteBtn } from "../querySelectors/listings/deleteBtn.mjs";
import { clearHTML } from "../utils/clear.mjs";
import { userAlert } from "./userAlert.mjs";
import { postBidForm } from "../templates/bidForm.mjs";

export const singleEntry = async () => {
  const container = document.querySelector("#product-container");
  const carouselContainer = document.querySelector("#carousel-container");
  const descriptionContainer = document.querySelector("#product-description");
  const bidContainer = document.querySelector("#bid-info-container");
  container.clearHTML();
  carouselContainer.clearHTML();
  descriptionContainer.clearHTML();
  bidContainer.clearHTML();

  const id = getParam("id");

  try {
    const data = await fetchSingleEntry(id);
    carousel(data, carouselContainer);

    const listing = new Listing(data);
    listing.render(container, descriptionContainer);
    // listing.renderBidInfo(bidContainer);

    postBidForm(data, bidContainer);

    // showEditBtn(data);

    editForm(id);
    deleteBtn(id);
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
