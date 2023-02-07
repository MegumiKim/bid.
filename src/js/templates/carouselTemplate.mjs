export const carouselTemplate = (data) => {
  return `
  <div class="carousel-item active">
    <img
      src="${data}"
      class="d-block w-100"
      alt="..."
    />
  </div>
  `;
};
