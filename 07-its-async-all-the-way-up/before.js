import { fetchUserById } from "../utils/api.js";

async function getUser(userId) {
  const user = await fetchUserById(userId); // we await the value here
  return user;
}

function getUserSafe(userId) {
  const user = getUser(userId); // do we also need to await it here?
  delete user.address;
  delete user.phone;
  return user;
}

function getUserSafeWrapper(userId) {
  return getUserSafe(userId);
}

// surely no need to await here? getUserSafeWrapper is not async..
const user = getUserSafeWrapper(1);
console.log(user);
