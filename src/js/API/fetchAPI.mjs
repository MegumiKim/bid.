export async function fetchAPI(url, options) {
  const response = await fetch(url, options);
  console.log(response);

  if (response.ok) {
    return await response.json();
  }
  throw new Error(JSON.stringify(response.statusText));
}
