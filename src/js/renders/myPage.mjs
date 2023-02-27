import * as API from "../API/index.mjs";
import * as template from "../templates/index.mjs";
import * as tool from "../tools/index.mjs";
import * as render from "./index.mjs";
import { clearHTML } from "../tools/clear.mjs";

export const myPage = async () => {
  const container = document.querySelector("#profile-container");
  const navBtn = document.querySelector("#navBtn");

  container.clearHTML();

  const name = tool.getParam("name");

  try {
    const data = await API.fetchSingleUser(name);
    template.postMyPage(data, container);
    render.myWins(data);
    render.myFavorites();
    navBtn.src = data.avatar;
  } catch (e) {
    render.userAlert(container, e.message, "secondary");
  }
};
