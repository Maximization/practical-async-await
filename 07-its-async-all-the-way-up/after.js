import { fetchUserById } from "../utils/api.js";

async function getUser(userId) {
  const user = await fetchUserById(userId);
  return user;
}

async function getUserSafe(userId) {
  const user = await getUser(userId);
  delete user.address;
  delete user.phone;
  return user;
}

// Even though we're not using await inside this function,
// we add the async keyword to clarify it returns a Promise
async function getUserSafeWrapper(userId) {
  return getUserSafe(userId);
}

const user = await getUserSafeWrapper(1);
console.log(user);
