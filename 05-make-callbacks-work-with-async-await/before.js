import { fetchUser } from "../utils/api.js";

function getUserAddress(userId) {
  fetchUser(userId, (err, user) => {
    if (err) {
      console.log(err);
      return;
    }

    user.address; // we want this value
  });
}

const address = getUserAddress(1); // to be returned here
console.log(address);
