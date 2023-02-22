import { fetchSingleUser } from "../API/user/singleUser.mjs";
import { getParam } from "../tools/getParam.mjs";
import { userAlert } from "./userAlert.mjs";
import { clearHTML } from "../tools/clear.mjs";
import { postMyPage } from "../templates/myPage.mjs";
import { myWins } from "./myWins.mjs";

export const myPage = async () => {
  const container = document.querySelector("#profile-container");
  const navBtn = document.querySelector("#navBtn");

  container.clearHTML();

  const name = getParam("name");

  try {
    const data = await fetchSingleUser(name);
    console.log(data);
    postMyPage(data, container);
    myWins(data);
    navBtn.src = data.avatar;
  } catch (e) {
    userAlert(container, e.message, "secondary");
  }
};
