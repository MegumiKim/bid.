import { fetchAPI } from "../API/fetchAPI.mjs";
import { API_BASE_URL } from "../API/constants.mjs";
import { save } from "../storage/session.mjs";
import { listingCardTemplate } from "../templates/listingCard.mjs";

const allListingsURL = `${API_BASE_URL}listings?limit=10`;

export const renderAllListings = async () => {
  const container = document.querySelector("#listings-container");
  const listings = await getListings();
  listings.forEach((data) => {
    renderCard(container, data, ".card");
  });
};

async function getListings() {
  const options = makeOptions();
  const listings = await fetchAPI(allListingsURL, options);
  save("cached-listings", listings);

  return listings;
}

function makeOptions() {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export const renderCard = (parent, data, selector) => {
  const template = listingCardTemplate(data);
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, "text/html");
  const element = doc.querySelector(selector);

  parent.append(element);
};
