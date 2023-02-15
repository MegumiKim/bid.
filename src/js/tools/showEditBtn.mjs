import { load } from "../storage/local.mjs";

export function showEditBtn(data) {
  const seller = data.seller.email;
  const myEmail = load("userDetails").email;
  const bidBtnContainer = document.querySelector("#bidBtn-container");

  if (seller === myEmail) {
    bidBtnContainer.innerHTML = `
      <button
        type="button"
        class="w-100 btn btn-lg btn-outline-main"
        data-bs-toggle="modal"
        data-bs-target="#edit-modal"
        id="editBtn"
      >
        Edit listing
      </button>
    `;
  }
}
