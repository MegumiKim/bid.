export const listingCardTemplate = (data) => {
  return `
  <div class='col col-sm-3 card-template'>
  <a class="card p-3 " href="./product/?id=${data.id}">
  <img
    width="100%" class="h-100 w-100"
    // src="${data.media[0]}"
    alt="${data.title}"
    onerror="this.onerror=null;this.src='../../../asset/img/placeholder_img.png'"
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
      <small class="text-dark">Ends at ${new Date(
        data.endsAt
      ).toLocaleDateString("en-GB")}</small>
    </div>
  </div>
</a>
  `;
};
