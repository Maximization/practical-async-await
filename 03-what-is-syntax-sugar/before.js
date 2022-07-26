import {
  fetchUserByUsername,
  fetchPosts,
  fetchComments,
} from "../utils/api.js";

try {
  // Fetch user
  const username = "Delphine";
  const user = await fetchUserByUsername(username);
  const userId = user.id;

  // Fetch posts
  const posts = await fetchPosts(userId);
  const firstPostId = posts[0].id;

  // Fetch comments
  const comments = await fetchComments(firstPostId);
  const firstComment = comments[0];

  console.log(firstComment.body);
} catch (error) {
  console.log(error);
}
