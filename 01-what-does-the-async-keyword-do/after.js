import { fetchUserById } from "../utils/api.js";

/**
 * Adding the async keyword to a function changes
 * that function in two ways:
 *
 * 1. The function will *always* return a Promise
 * 2. Can use the await keyword inside the function
 */
async function getUser() {
  const user = await fetchUserById(1);
  return user;
}

const user = await getUser();
console.log(user);
