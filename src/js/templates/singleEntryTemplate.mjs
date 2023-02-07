export const singleEntryTemplate = (data) => {
  return `        


<div class="listing col-12">
  <div class="card card-specific mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
      <h1 class="my-0 fw-normal">${data.title}</h1>
    </div>
    <div class="card-body">
      <h4 class="card-title pricing-card-title">Bid ${data.bid}</h4>

      <ul class="list-unstyled mt-3 mb-4">
        <li>Last bid: 3h ago</li>
        <li>Ends in: ${data.endsAt}</li>
      </ul>
      <button
        type="button"
        class="w-100 btn btn-lg btn-outline-main"
        data-bs-toggle="modal"
        data-bs-target="#bidModal"
      >
        Place a bid
      </button>
    </div>
  </div>
</div>


<div id="description" class="row row-cols-1 row-cols-sm-2 d-flex">
  <div class="card card-specific mb-4 rounded-3 shadow-sm col col-sm-5">
    <div class="card-header py-3">
      <h3 class="my-0 fw-normal">Product Description</h3>
    </div>
    <div class="card-body">
      <h4 class="card-title pricing-card-title">Current bid: 898 pt</h4>

      <p>${data.description}</p>
    </div>
  </div>
  <div class="card card-specific mb-4 rounded-3 shadow-sm col col-sm-5">
    <div class="card-header py-3">
      <h3 class="my-0 fw-normal">Seller</h3>
    </div>
    <div class="card-body">
      <ul class="list-unstyled mt-3 mb-4">
        <li>Christine Johns</li>
        <li>christine@noroff.no</li>
      </ul>
    </div>
  </div>
</div>

`;
};
