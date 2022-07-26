import { fetchUserById } from "../utils/api.js";

const userIds = [1, 2, 3, 4, 5];

const usernames = await Promise.all(
  userIds.map(async (userId) => {
    console.log("Fetching user with ID:", userId);
    const user = await fetchUserById(userId);
    console.log("Received user with ID:", userId);
    return user.username;
  })
);

console.log("Done!");
console.log(usernames);
