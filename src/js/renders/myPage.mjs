import { fetchSingleUser } from "../API/user/singleUser.mjs";
import { getParam } from "../utils/getParam.mjs";

import User from "../Classes/User.mjs";

export const myPage = async () => {
  const container = document.querySelector("#profile-container");
  const myItemsContainer = document.querySelector("#my-items");
  container.innerHTML = "";

  const name = getParam("name");

  try {
    const data = await fetchSingleUser(name);
    const user = new User(data);
    user.render(container);
  } catch (e) {
    console.log(e);
  }
};
