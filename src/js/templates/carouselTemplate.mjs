import { createElement } from "../templates/createElements/createElement.mjs";

export const carouselTemplate = (data) => {
  return `
  <div class="carousel-item active" 
  data-bs-toggle="modal"
  data-bs-target="#modal-img" >
    <img
      src="${data}"
      class="d-block w-100 m-auto"
      alt="..."
    />
  </div>

  <!-- Modal Closeup img-->
  <div
    class="modal fade"
    id="modal-img"
    tabindex="-1"
    aria-labelledby="logout"
    aria-hidden="true"
  >
    <div class="modal-dialog">

      <div class="modal-content" >


    <div class="modal-header">

    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body" id="modal-img-container">
  
<div>
<img  
src="${data}"
class="d-block w-100 m-auto"
alt="..."
/>
</div>
      </div>
    </div>
  </div>

  `;
};

export function createSlide(item, title) {
  const image = createElement(
    "img",
    "w-100 h-100 m-auto",
    undefined,
    undefined,
    item,
    title
  );

  const element = createElement(
    "div",
    "carousel-item active text-center my-3",
    undefined,
    [image]
  );
  // element["data-bs-toggle"] = "modal";
  // element["data-bs-target"] = "#modal-img";

  return element;
}
