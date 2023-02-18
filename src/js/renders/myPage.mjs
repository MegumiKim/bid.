import { fetchSingleUser } from "../API/user/singleUser.mjs";
import { getParam } from "../utils/getParam.mjs";
import { fetchMyBids } from "../API/listings/fetchMybids.mjs";
import User from "../Classes/User.mjs";
import { renderCard } from "./renderCard.mjs";
import { userAlert } from "./userAlert.mjs";
import { clearHTML } from "../utils/clear.mjs";
import { postMyPage } from "../templates/myPage.mjs";

export const myPage = async () => {
  const container = document.querySelector("#profile-container");
  const myListingsContainer = document.querySelector("#my-listings-container");
  const myBidsContainer = document.querySelector("#my-bids-container");
  const myWinsContainer = document.querySelector("#my-wins-container");

  container.clearHTML();
  myListingsContainer.clearHTML();
  myBidsContainer.clearHTML();
  myWinsContainer.clearHTML();

  const name = getParam("name");

  try {
    const data = await fetchSingleUser(name);
    const myBids = await fetchMyBids(name);
    myBids.forEach((bid) => {
      const listing = bid.listing;
      renderCard(myBidsContainer, listing);
    });

    const user = new User(data);
    // user.render(container);
    user.renderMyListings(myListingsContainer);

    postMyPage(data, container);
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
