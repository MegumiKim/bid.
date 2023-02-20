import { fetchSingleEntry } from "../../API/listings/singleEntry.mjs";
import { editListingListener } from "../../listeners/listings/onEdit.mjs";

export async function editForm(id) {
  const editForm = document.querySelector("#edit-form");
  const listing = await fetchSingleEntry(id);

  editForm.title.value = listing.title;
  editForm.description.value = listing.description;
  editForm.tags.value = listing.tags;
  editForm.media.value = listing.media;

  editForm.addEventListener("submit", (event) =>
    editListingListener(event, id)
  );
}
