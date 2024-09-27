export default async function getResponseFromAPI() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
