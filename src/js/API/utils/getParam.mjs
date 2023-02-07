/**
 * Find the required parameter in the URL
 * @param {string} param parameter name
 * @returns value of the parameter
 *
 * @example
 * ```js
 * //to find an "id" parameter in the URL(www.example.com/item?id=23)
 * const id = getParam("id");
 * //expect value of the parameter, 23
 * ```
 */
export function getParam(param) {
  const url = new URL(location.href);
  return url.searchParams.get(param);
}
