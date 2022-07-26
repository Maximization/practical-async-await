import { fetchUserById } from "../utils/api.js";

const userCache = new Map();

async function getUser(userId) {
  if (!userCache.has(userId)) {
    console.log("Fetching user with ID", userId);
    const user = await fetchUserById(userId);
    userCache.set(userId, user);
  }

  return userCache.get(userId);
}

// Simultaneous requests for non-cached values lead to a race condition
// with multiple network requests as a result
const results = await Promise.all([
  getUser(6),
  getUser(6),
  getUser(6),
  getUser(6),
  getUser(6),
]);
console.log(results.map((user) => user.username));
