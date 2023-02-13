export const singleEntryTemplate = (data) => {
  return `        


<div class="listing col-12">
  <div class="card card-specific mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
      <h1 class="my-0 fw-normal">${data.title}</h1>
    </div>
    <div class="card-body">
      <ul class="list-unstyled mt-3 mb-4">
        <li class="currentBid"></li>
        <li class="endTime"> Ends in: ${data.remainingTime} </li>
      </ul>
      <button
        type="button"
        class="w-100 btn btn-lg btn-outline-main"
        data-bs-toggle="modal"
        data-bs-target="#bidModal"
      >
        Make a bid
      </button>
    </div>
  </div>
</div>


<div id="description" class="row row-cols-1 row-cols-md-3 d-flex ">

  <div class="card card-specific mb-4 rounded-3 shadow-sm col col-md-4">
    <div class="card-header py-3">
      <h3 class="my-0 fw-normal">Product Description</h3>
    </div>
    <div class="card-body">
    <p>${data.description}</p>

      <h5 class="card-title pricing-card-title text-light">Tags</h5>
      <ul class="tags-container list-unstyled mt-3 mb-4">
      </ul>
    </div>
  </div>

  <div class="card card-specific mb-4 rounded-3 shadow-sm col col-md-4">
  <div class="card-header py-3">
    <h3 class="my-0 fw-normal">Seller</h3>
  </div>
  <div class="d-flex list-group-item list-group-item-action py-3" aria-current="true">
    <img src="${data.seller.avatar}" alt="${data.seller.name}" onerror="this.onerror=null;this.src='../../../asset/img/avatar-3814081_640.png'" class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32">
  
    <div class="d-flex w-100 justify-content-between small lh-sm text-muted">
      <div>
        <strong class="text-gray-dark">${data.seller.name}</strong>
        <p class="mb-0 opacity-75">${data.seller.email}</p>
      </div>
    </div>
  </div>
</div>

  <div class="card card-specific mb-4 rounded-3 shadow-sm col col-md-4">
    <div class="card-header py-3">
      <h3 class="my-0 fw-normal">Bid History</h3>
    </div>
    <div class="card-body">
      <ul class="bids-container list-unstyled mt-3 mb-4">
      </ul>
    </div>
  </div>



</div>

`;
};
