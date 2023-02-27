import * as API from "../API/index.mjs";
import * as tool from "../tools/index.mjs";
import * as render from "./index.mjs";

export const myListings = async () => {
  const container = document.querySelector("#my-listings-container");
  const name = tool.getParam("name");

  try {
    const myListings = await API.fetchListingsForSingleProfile(name);
    const accordionBtn = document.querySelector("#myListingsBtn");
    accordionBtn.innerText = `My Listings (${myListings.length})`;

    if (myListings.length) {
      render.renderCards(myListings, container);
    } else {
      container.innerHTML = `<p class="text-light">You have no listings yet.</p>`;
    }
  } catch (e) {
    render.userAlert(container, e.message, "secondary");
  }
};
