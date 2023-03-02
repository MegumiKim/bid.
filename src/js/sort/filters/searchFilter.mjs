/**
 * Returns a listing which contains the given search term in its title, description or tags.
 * @param {object} listing
 * @param {string} searchTerm
 */
export function searchFilter(listing, searchTerm) {
  const title = listing.title.toLowerCase();
  const description = listing.description
    ? listing.description.toLowerCase()
    : "";

  const tags = Boolean(
    listing.tags
      .map((tag) => tag.toLowerCase())
      .filter((tag) => tag.includes(searchTerm)).length
  );

  return title.includes(searchTerm) || description.includes(searchTerm) || tags;
}
