export async function getReadme(repoUrl: string) {
  const repo = repoUrl.split("github.com/")[1];
  let readmeUrl = `https://raw.githubusercontent.com/${repo}/main/README.md`;
  let response = await fetch(readmeUrl);
  let result = await response.text();
  if (result.length === 0) {
    readmeUrl = `https://raw.githubusercontent.com/${repo}/master/README.md`;
    response = await fetch(readmeUrl);
    result = await response.text();
  }
  return result;
}
