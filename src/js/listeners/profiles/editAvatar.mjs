import { editAvatar } from "../../API/user/editAvatar.mjs";
import { myListings } from "../../renders/myListings.mjs";
import { myPage } from "../../renders/myPage.mjs";
import { userAlert } from "../../renders/userAlert.mjs";
import { save, load } from "../../storage/local.mjs";
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
    const response = await editAvatar(name, payload);
    const userDetails = load("userDetails");
    userDetails.avatar = response.avatar;

    save("userDetails", userDetails);
    error.clearHTML();
    form.reset();
    myPage();
    myListings();
    // myModal.hide();
  } catch (e) {
    console.log(e);
    userAlert(error, e.message, "secondary");
  }
}
