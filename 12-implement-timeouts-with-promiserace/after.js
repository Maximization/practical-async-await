import { fetchUserSlow } from "../utils/api.js";
import { TimeoutError } from "../utils/helpers.js";

async function withTimeout(asyncFn, timeout, ...args) {
  return Promise.race([
    asyncFn(...args),
    new Promise((_, reject) => setTimeout(reject, timeout, new TimeoutError())),
  ]);
}

try {
  const user = await withTimeout(fetchUserSlow, 2000, 1);
  console.log(user);
} catch (error) {
  if (error.name === "TimeoutError") {
    console.log("Fetching the user took too long");
  }
}
