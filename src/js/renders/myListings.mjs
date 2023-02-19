// import { getParam } from "../utils/getParam.mjs";
// import { fetchMyBids } from "../API/listings/fetchMybids.mjs";
// import { userAlert } from "./userAlert.mjs";
// import { clearHTML } from "../utils/clear.mjs";
// import { postListingCard } from "../templates/listingCard.mjs";

// export const myListings = async () => {
//   const myListingsContainer = document.querySelector("#my-listings-container");

//   myListingsContainer.clearHTML();
//   const name = getParam("name");

//   try {
//     const myListings = await fetchSingleUser(name);
//     myBids.forEach((bid) => {
//       postListingCard(bid.listing, myBidsContainer);
//     });
//   } catch (e) {
//     userAlert(myListingsContainer, e.message, "secondary");
//   }
// };
