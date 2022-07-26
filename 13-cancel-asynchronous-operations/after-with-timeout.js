import fetch from "node-fetch";

try {
  const response = await fetch(
    "https://deelay.me/3000/https://jsonplaceholder.typicode.com/users",
    {
      signal: AbortSignal.timeout(2000),
    }
  );
  const users = await response.json();
  console.log(users);
} catch (error) {
  if (error.name === "AbortError") {
    console.log("The request took too long..");
  }
}
