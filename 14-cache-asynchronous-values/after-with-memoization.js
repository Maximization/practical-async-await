import memoizee from "memoizee";
import { fetchUserById } from "../utils/api.js";

const getUser = memoizee(
  async (userId) => {
    console.log("Fetching user with ID", userId);
    const user = await fetchUserById(userId);
    return user;
  },
  { promise: true, max: 1000 }
);

const results = await Promise.all([
  getUser(6),
  getUser(6),
  getUser(6),
  getUser(6),
  getUser(6),
]);
console.log(results.map((user) => user.username));
