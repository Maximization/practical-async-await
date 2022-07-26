import fetch from "node-fetch";

try {
  // We want to cancel the request if it takes longer than 2 seconds
  const response = await fetch(
    "https://deelay.me/3000/https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.json();
  console.log(users);
} catch (error) {
  // And log the cancelation here
  console.log("The request took too long..");
}
