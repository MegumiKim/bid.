import { userAlert } from "../renders/userAlert.mjs";
import { cloneTemplate } from "./cloneTemplate.mjs";

export const postCarousel = (media, altTxt, parent) => {
  try {
    const doc = cloneTemplate("carousel-template");

    const img = doc.querySelector("img");
    img.src = media;
    img.alt = altTxt;

    const imgModal = doc.querySelector("img.myModal");
    imgModal.src = media;
    imgModal.alt = altTxt;
    img.onerror = (event) => {
      event.target.src = "../../../asset/img/placeholder_img.png";
    };

    parent.append(doc);
  } catch (e) {
    // userAlert(parent, "Failed to fetch data", "danger");
    throw new Error(e);
  }
};
