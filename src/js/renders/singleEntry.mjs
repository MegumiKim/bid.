import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { getParam } from "../tools/getParam.mjs";
import { carousel } from "../templates/createElements/carousel.mjs";
import { showEditBtn } from "../tools/showEditBtn.mjs";
import { editForm } from "../querySelectors/listings/editForm.mjs";
import { deleteBtn } from "../querySelectors/listings/deleteBtn.mjs";
import { clearHTML } from "../tools/clear.mjs";
import { userAlert } from "./userAlert.mjs";
import { postBidForm } from "../templates/bidForm.mjs";
import { postProductCTASection } from "../templates/productCTASection.mjs";
import { postProductDescription } from "../templates/productDescription.mjs";
import { postSeller } from "../templates/seller.mjs";
// import { createBidInfo } from "../Classes/classFunctions/createBidInfo.mjs";
import { renderBidHistory } from "./bidHistory.mjs";

export const singleEntry = async () => {
  const container = document.querySelector("#product-container");
  const carouselContainer = document.querySelector("#carousel-container");
  const descriptionContainer = document.querySelector("#description-container");
  const sellerContainer = document.querySelector("#seller-container");
  const bidContainer = document.querySelector("#bid-info-container");
  const bidHistoryContainer = document.querySelector("#bid-history-container");
  container.clearHTML();
  carouselContainer.clearHTML();
  descriptionContainer.clearHTML();
  bidContainer.clearHTML();

  const id = getParam("id");

  try {
    const data = await fetchSingleEntry(id);
    carousel(data, carouselContainer);
    postProductCTASection(data, container);
    postProductDescription(data, descriptionContainer);
    postSeller(data, sellerContainer);

    postBidForm(data, bidContainer);
    renderBidHistory(data, bidHistoryContainer);
    showEditBtn(data);

    editForm(id);
    deleteBtn(id);
  } catch (e) {
    userAlert(bidHistoryContainer, e.message, "secondary");
    throw new Error(e);
  }
};
