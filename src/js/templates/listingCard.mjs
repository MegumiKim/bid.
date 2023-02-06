export const listingCardTemplate = (data) => {
  return `
  <a class="card shadow-sm" href="./product/">
  <img
    width="100%" class="h-100 w-100"
    src="${data.media[0]}"
    role="img"
    aria-label="Placeholder: Thumbnail"
    preserveAspectRatio="xMidYMid slice"
    focusable="false"
  >
  </img>
  <div class="card-body">
    <h4 class="card-title">${data.title}</h4>
    <div
      class="d-flex justify-content-between align-items-center"
    >
      <small class="text-dark">Bids${data.title}  </small>
      <small class="text-dark">Ends at ${data.endsAt}</small>
    </div>
  </div>
</a>

  `;
};
