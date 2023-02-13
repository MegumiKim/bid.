export function myPageTemplate(data) {
  return `
        <div
        id="user-summary"
            class="p-4 align-items-center rounded-3 border shadow-lg d-sm-flex"
          >
            <div class="col-sm-6 p-3 p-lg-5 pt-lg-3 pe-lg-0 text-center">
              <h1 class="fw-bold mb-3">Hello ${data.name}!</h1>
              <h3>Current Cash Point: <br><img src="../../../asset/icons/money-icon.svg"></img>
              ${data.credits} pt</h3>

              <button 
              data-bs-toggle="modal"
              data-bs-target="#add-new-item-modal"
              class="btn btn-outline-main mt-3">Create new listing</button>
            </div>
            <div class="col-sm-5">
              <div class="mx-auto mb-3 col-6 col-md-10 col-lg-7 position-relative">

                <img class="rounded-circle" src="${data.avatar}"
                 onerror="this.onerror=null; this.src='../../../asset/img/avatar-3814081_640.png'" alt="${data.name}" width="200" height="200" style="object-position: center center; object-fit: cover">

                <div class="position-absolute top-0 start-100" id="edit-avatar"                 
                data-bs-toggle="modal"
                data-bs-target="#edit-avatar-modal">
              

                <img src="../../../asset/icons/pencil-square.svg">
                </div>
              </img>
            </div>
              <h2 class="fw-normal text-center">${data.name}</h2>
              <p class="fw-normal text-center mb-0">${data.email}</p>
            </div>
          </div>
`;
}
