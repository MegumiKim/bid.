// import { Modal } from "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { Modal } from "bootstrap";

export function closeModal(modalElement) {
  // const modal = document.querySelector(modalElement);
  // const myModal = Modal.getOrCreateInstance(modal);

  const options = { backdrop: "static" };
  const myModal = new Modal(document.querySelector(modalElement), options);
  myModal.hide();
}
