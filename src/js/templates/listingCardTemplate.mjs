export const listingCardTemplate = (data) => {
  return `
  <div class='col card-template'>
  <a class="card  " href="/product/?id=${data.id}">

<div class="m-auto p-3 p-md-3" style="overflow:hidden; max-width:300px; height:300px;">
  <img src="${data.media[0]}"  alt="${data.title}"
  onerror="this.onerror=null;this.src='../../../asset/img/placeholder_img.png'" width="100%" class="h-100 w-100" >
  </img>
</div>

  <div class="card-body">
    <h4 class="card-title ">${data.title}</h4>
    <div
      class="justify-content-between align-items-center"
    >
      <div class="col ">Created on ${new Date(data.created).toLocaleDateString(
        "en-GB"
      )} </div>
      <div class="col ">Ends on ${new Date(data.endsAt).toLocaleDateString(
        "en-GB"
      )}</div>
    </div>
    <div class="tags text-light">
    </div>
  </div>
</a>
  `;
};
