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
 * Add the await keyword in the right spots
 */
function sayHello() {
  const userId = getRandomUserId();
  const user = fetchUserById(userId);
  const greeting = getGreeting(user.name);
  console.log(greeting);
}

function logCommentCount() {
  const userId = getRandomUserId();
  const posts = fetchPosts(userId);
  posts.forEach((post) => {
    const postId = post.id;
    const comments = fetchComments(postId);
    console.log(`Post with ID: ${postId} has ${comments.length} comments`);
  });
}

sayHello();
logCommentCount();
