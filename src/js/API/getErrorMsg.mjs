export function getErrorMessage(string) {
  let errorString = string;

  try {
    let json = JSON.parse(string);
    if (json.errors) {
      errorString = json.errors[0].message;
    }
  } catch (parseOrAccessError) {}

  return errorString;
}
