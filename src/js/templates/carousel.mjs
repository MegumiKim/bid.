import { cloneTemplate } from "./cloneTemplate.mjs";

export const postCarousel = (media, altTxt, parent) => {
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
};

// export function createSlide(item, title) {
//   const image = createElement(
//     "img",
//     "w-100 h-100 m-auto",
//     undefined,
//     undefined,
//     item,
//     title
//   );

//   const element = createElement(
//     "div",
//     "carousel-item active text-center my-3",
//     undefined,
//     [image]
//   );
//   // element["data-bs-toggle"] = "modal";
//   // element["data-bs-target"] = "#modal-img";

//   return element;
// }
