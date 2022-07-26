import { fetchUserById } from "../utils/api.js";

const userIds = [1, 2, 3, 4, 5];

const usernames = [];
for (const userId of userIds) {
  // Skip fetching user with ID = 2
  if (userId === 2) {
    continue;
  }

  // Stop after we have 3 usernames
  if (usernames.length === 3) {
    break;
  }

  console.log("Fetching user with ID:", userId);
  const user = await fetchUserById(userId);
  console.log("Received user with ID:", userId);
  usernames.push(user.username);
}

console.log("Done!");
console.log(usernames);
