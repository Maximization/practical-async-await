import util from "node:util";
import { fetchUser } from "../utils/api.js";

const fetchUserAsync = util.promisify(fetchUser);

async function getUserAddress(userId) {
  try {
    const user = await fetchUserAsync(userId);
    return user.address;
  } catch (error) {
    console.log(error);
  }
}

const address = await getUserAddress(1);
console.log(address);
