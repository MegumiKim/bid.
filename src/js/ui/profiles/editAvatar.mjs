import { editAvatarListener } from "../../listeners/index.mjs";

export const editAvatarBtn = () => {
  document
    .querySelector("#edit-avatar")
    .addEventListener("submit", editAvatarListener);
};
