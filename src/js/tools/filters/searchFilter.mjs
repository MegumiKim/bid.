export function searchFilter(listing, searchTerm) {
  const title = listing.title.toLowerCase();
  const description = listing.description
    ? listing.description.toLowerCase()
    : "";

  // const tags = Boolean(
  //   listing.tags
  //     .map((tag) => tag.toLowerCase())
  //     .filter((tag) => tag.includes(searchTerm).length)
  // );
  console.log(listing);

  return title.includes(searchTerm) || description.includes(searchTerm);
}
