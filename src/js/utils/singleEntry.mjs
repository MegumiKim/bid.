import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { editForm } from "../ui/listings/editForm.mjs";
import { deleteBtn } from "../ui/listings/deleteBtn.mjs";
import { renderBidHistory } from "../renders/bidHistory.mjs";
import { clearHTML } from "../tools/clear.mjs";
import { getParam } from "../tools/getParam.mjs";
import { toggleCTABtn } from "../tools/toggleCTABtn.mjs";
import * as templates from "../templates/index.mjs";
import { carousel } from "../renders/carousel.mjs";
// import { userAlert } from "../renders/userAlert.mjs";

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
  sellerContainer.clearHTML();
  bidHistoryContainer.clearHTML();
  bidContainer.clearHTML();

  const id = getParam("id");

  const data = await fetchSingleEntry(id);
  templates.postProductCTASection(data, container);
  templates.postProductDescription(data, descriptionContainer);
  templates.postSeller(data, sellerContainer);
  templates.postBidForm(data, bidContainer);
  carousel(data, carouselContainer);
  renderBidHistory(data, bidHistoryContainer);
  toggleCTABtn(data);
  editForm(id);
  deleteBtn(id);
};
