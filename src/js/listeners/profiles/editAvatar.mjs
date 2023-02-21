import { editAvatar } from "../../API/user/editAvatar.mjs";
import { myPage } from "../../renders/myPage.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
// import { closeModal } from "../../tools/modal.mjs";
import { getParam } from "../../tools/getParam.mjs";

export async function editAvatarListener(event) {
  event.preventDefault();
  const error = document.querySelector("#user-alert-avatar");

  // const myModal = new bootstrap.Modal("#edit-avatar-modal");

  const name = getParam("name");
  const form = event.target;
  const formData = new FormData(form);
  let payload = Object.fromEntries(formData.entries());

  try {
    await editAvatar(name, payload);

    error.clearHTML();
    form.reset();
    myPage();
    // myModal.hide();
  } catch (e) {
    console.log(e);
    userAlert(error, e.message, "secondary");
  }
}
