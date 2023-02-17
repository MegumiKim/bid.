import { editAvatar } from "../../API/user/editAvatar.mjs";
import { myPage } from "../../renders/myPage.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
// import { closeModal } from "../../tools/modal.mjs";
import { getParam } from "../../utils/getParam.mjs";

export async function editAvatarListener(event) {
  event.preventDefault();

  const error = document.querySelector("#user-alert-avatar");
  const modal = document.querySelector("#edit-avatar-modal");
  const name = getParam("name");
  const form = event.target;
  const formData = new FormData(form);
  let payload = Object.fromEntries(formData.entries());

  try {
    await editAvatar(name, payload);
    form.reset();
    myPage();
    // closeModal(modal);
  } catch (e) {
    userAlert(error, e.message, "secondary");
  }
}
