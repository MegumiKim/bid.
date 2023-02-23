import { fetchSingleEntry } from "../API/listings/singleEntry.mjs";
import { editForm } from "../ui/listings/editForm.mjs";
import { deleteBtn } from "../ui/listings/deleteBtn.mjs";
import { clearHTML } from "../tools/clear.mjs";
import { getParam } from "../tools/getParam.mjs";
import { toggleCTABtn } from "../tools/toggleCTABtn.mjs";
import * as templates from "../templates/index.mjs";
import { carousel } from "./carousel.mjs";

export const singleEntry = async () => {
  const container = document.querySelector("#product-container");
  const carouselContainer = document.querySelector("#carousel-container");
  const descriptionContainer = document.querySelector("#description-container");
  const bidContainer = document.querySelector("#bid-info-container");
  container.clearHTML();
  carouselContainer.clearHTML();
  descriptionContainer.clearHTML();
  bidContainer.clearHTML();

  const id = getParam("id");

  const data = await fetchSingleEntry(id);

  document.title = `bid. | ${data.title}`;
  templates.postProductCTASection(data, container);
  templates.postProductDescription(data, descriptionContainer);
  templates.postBidForm(data, bidContainer);
  carousel(data, carouselContainer);
  toggleCTABtn(data);
  editForm(id);
  deleteBtn(id);
};
