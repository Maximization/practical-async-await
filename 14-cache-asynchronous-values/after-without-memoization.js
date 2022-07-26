import { fetchUserById } from "../utils/api.js";

const userPromiseCache = new Map();

async function getUser(userId) {
  if (!userPromiseCache.has(userId)) {
    console.log("Fetching user with ID", userId);
    const userPromise = fetchUserById(userId).catch((error) => {
      userPromiseCache.delete(userId);
      return Promise.reject(error);
    });
    userPromiseCache.set(userId, userPromise);
  }

  return userPromiseCache.get(userId);
}

const results = await Promise.all([
  getUser(6),
  getUser(6),
  getUser(6),
  getUser(6),
  getUser(6),
]);
console.log(results.map((user) => user.username));
