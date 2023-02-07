import { carouselTemplate } from "../carouselTemplate.mjs";
import { createElement } from "./createElement.mjs";

export function carousel(data, parent) {
  // const title = createElement("title", undefined, data.title);
  // const created = createElement("h4", undefined, data.created);
  // const endsAt = createElement("h4", undefined, data.endsAt);

  data.media.forEach((item) => {
    const slide = carouselTemplate(item);
    parent.innerHTML += slide;
  });

  // const image = createElement(
  //   "img",
  //   ["d-block", "w-100"],
  //   undefined,
  //   undefined,
  //   item,
  //   data.title
  // );
  // const element = createElement(
  //   "div",
  //   ["carousel-item", "active"],
  //   undefined,
  //   [image]
  // );

  // console.log(element);
  // parent.append(element);
}
