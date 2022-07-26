import { fetchUserSlow } from "../utils/api.js";

try {
  // We want to add a 2s timeout to fetchUserSlow
  const user = await fetchUserSlow(1); // finishes in 10sec, too slow!
  console.log(user);
} catch (error) {
  // And log the timeout here
  console.log("Fetching the user took too long");
}
