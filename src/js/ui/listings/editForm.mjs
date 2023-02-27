import * as listeners from "../../listeners/index.mjs";
import * as API from "../../API/index.mjs";

export async function editForm(id) {
  const editForm = document.querySelector("#edit-form");
  const listing = await API.fetchSingleEntry(id);

  editForm.title.value = listing.title;
  editForm.description.value = listing.description;
  editForm.tags.value = listing.tags;
  editForm.media.value = listing.media;

  editForm.addEventListener("submit", (event) =>
    listeners.editListingListener(event, id)
  );
}
