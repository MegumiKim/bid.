export function myPageTemplate(data) {
  return `
        <div
        id="user-summary"
            class="p-4 align-items-center rounded-3 border shadow-lg d-sm-flex"
          >
            <div class="col-sm-6 p-3 p-lg-5 pt-lg-3 pe-lg-0 text-center">
              <h1 class="fw-bold mb-3">Hello ${data.name}!</h1>
              <h3>Current Cash Point: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
        
              </svg> 
              ${data.credits} pt</h3>

              <button 
              data-bs-toggle="modal"
              data-bs-target="#add-new-item-modal"
              class="btn btn-outline-main mt-3">Create new listing</button>
            </div>
            <div class="col-sm-5">
              <div class="mx-auto mb-3 col-6 col-md-10 col-lg-7 position-relative">
                <img
                  class="rounded-circle d-block mx-auto img-fluid "
                  max-width="100%"
                  role="img"
                  focusable="false"
                  src="${data.avatar}"
                  onerror="this.onerror=null;this.src='"../../../asset/img/avatar-3814081_640.png"'"
                >
                <div class="position-absolute top-0 start-100 ">
                  <svg width="20" height="20" fill="currentColor" class="bi bi-pencil-square text-light  " viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </div>

              </img>
            </div>
              <h2 class="fw-normal text-center">${data.name}</h2>
              <p class="fw-normal text-center mb-0">${data.email}</p>
            </div>
          </div>
`;
}
