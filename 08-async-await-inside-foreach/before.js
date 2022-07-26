import { fetchUserById } from "../utils/api.js";

const userIds = [1, 2, 3, 4, 5];
const usernames = [];

userIds.forEach(async (userId) => {
  const user = await fetchUserById(userId);
  usernames.push(user.username);
});

// this prints an empty array, no usernames here 🙁
console.log(usernames);
