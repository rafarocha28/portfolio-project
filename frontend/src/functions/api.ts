const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet(url: string) {
  //console.log(normalizeUrl(`${baseURL}/${url}`));
  const response = await fetch(normalizeUrl(`${baseURL}/${url}`));
  return response.json();
}

function normalizeUrl(url: string) {
  const protocol = url.split("://")[0];
  const theRest = url.split("://")[1];
  return `${protocol}://${theRest.replaceAll(/\/{2,}/g, "/")}`;
}
