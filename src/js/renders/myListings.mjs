import { getParam } from "../tools/getParam.mjs";
import { userAlert } from "./userAlert.mjs";
import { fetchListingsForSingleProfile } from "../API/listings/listingsForProfile.mjs";
import { renderCards } from "./renderCards.mjs";

export const myListings = async () => {
  const container = document.querySelector("#my-listings-container");
  const name = getParam("name");

  try {
    const myListings = await fetchListingsForSingleProfile(name);
    renderCards(myListings, container);
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
