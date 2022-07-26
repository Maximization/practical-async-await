import fetch from "node-fetch";

const controller = new AbortController();

try {
  setTimeout(() => controller.abort(), 2000);
  const response = await fetch(
    "https://deelay.me/3000/https://jsonplaceholder.typicode.com/users",
    {
      signal: controller.signal,
    }
  );
  const users = await response.json();
  console.log(users);
} catch (error) {
  if (error.name === "AbortError") {
    console.log("The request took too long..");
  }
}
