// import { editAvatarListener } from "../../listeners/index.mjs";
import { load } from "../../storage/local.mjs";
import * as listeners from "../../listeners/index.mjs";
export const editAvatar = () => {
  const form = document.querySelector("#edit-avatar-form");

  form.addEventListener("submit", listeners.editAvatarListener);
};
