import * as API from "../API/index.mjs";
import * as templates from "../templates/index.mjs";
import * as ui from "../ui/index.mjs";
import * as tool from "../tools/index.mjs";
import * as render from "./index.mjs";
import { clearHTML } from "../tools/clear.mjs";

/**
 * Fetches single entry data, renders product specific page and sets up functions.
 */
export const singleEntry = async () => {
  const container = document.querySelector("#product-container");
  const carouselContainer = document.querySelector("#carousel-container");
  const descriptionContainer = document.querySelector("#description-container");
  const bidContainer = document.querySelector("#bid-form-container");
  container.clearHTML();
  carouselContainer.clearHTML();
  descriptionContainer.clearHTML();
  bidContainer.clearHTML();

  const id = tool.getParam("id");
  const data = await API.fetchSingleEntry(id);

  document.title = `bid. | ${data.title}`;
  templates.postProductCTASection(data, container);
  templates.postProductDescription(data, descriptionContainer);
  templates.postBidForm(data, bidContainer);
  render.carousel(data, carouselContainer);
  tool.toggleCTABtn(data);
  ui.editForm(id);
  ui.deleteBtn(id);
  ui.favBtn(data);
};
