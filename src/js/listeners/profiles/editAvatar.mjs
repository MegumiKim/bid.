import { editAvatar } from "../../API/user/editAvatar.mjs";
import { myPage } from "../../renders/myPage.mjs";
import { getParam } from "../../utils/getParam.mjs";
import User from "../../Classes/User.mjs";
import { fetchSingleUser } from "../../API/user/singleUser.mjs";

export async function editAvatarListener(event) {
  event.preventDefault();

  const name = getParam("name");
  const form = event.target;
  const formData = new FormData(form);
  let payload = Object.fromEntries(formData.entries());

  try {
    await editAvatar(name, payload);
    myPage();
  } catch (e) {
    console.log(e);
  }
}
