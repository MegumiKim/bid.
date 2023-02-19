import { fetchSingleUser } from "../API/user/singleUser.mjs";
import { getParam } from "../utils/getParam.mjs";
// import { fetchMyBids } from "../API/listings/fetchMybids.mjs";
// import User from "../Classes/User.mjs";
import { userAlert } from "./userAlert.mjs";
import { clearHTML } from "../utils/clear.mjs";
import { postMyPage } from "../templates/myPage.mjs";
import { postListingCard } from "../templates/listingCard.mjs";

export const myPage = async () => {
  const container = document.querySelector("#profile-container");
  const myListingsContainer = document.querySelector("#my-listings-container");
  // const myBidsContainer = document.querySelector("#my-bids-container");

  container.clearHTML();
  myListingsContainer.clearHTML();
  // myBidsContainer.clearHTML();

  const name = getParam("name");

  try {
    const data = await fetchSingleUser(name);
    postMyPage(data, container);

    data.listings.forEach((listing) => {
      postListingCard(listing, myListingsContainer);
    });

    // const user = new User(data);
    // user.render(container);
    // user.renderMyListings(myListingsContainer);
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
