import { fetchComments, fetchPosts, fetchUserById } from "../utils/api.js";

/**
 * Helper functions
 */
function getRandomUserId() {
  return Math.ceil(Math.random() * 10);
}

function getGreeting(name) {
  return `Hello, ${name}!`;
}

/**
 * When and where to use the await keyword:
 *
 * 1. *Only* on functions that return a Promise
 * 2. When you want to access the value inside a Promise
 * 3. The immediate outer function needs to be async, or
 *    with ES Modules + top-level await enabled if used at
 *    the module scope
 */
async function sayHello() {
  const userId = getRandomUserId();
  const user = await fetchUserById(userId);
  const greeting = getGreeting(user.name);
  console.log(greeting);
}

async function logCommentCount() {
  const userId = getRandomUserId();
  const posts = await fetchPosts(userId);
  posts.forEach(async (post) => {
    const postId = post.id;
    const comments = await fetchComments(postId);
    console.log(`Post with ID: ${postId} has ${comments.length} comments`);
  });
}

sayHello();
logCommentCount();
