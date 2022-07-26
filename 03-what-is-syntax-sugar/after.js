import {
  fetchUserByUsername,
  fetchPosts,
  fetchComments,
} from "../utils/api.js";

// Fetch user
const username = "Delphine";
fetchUserByUsername(username)
  .then((user) => {
    const userId = user.id;

    // Fetch posts
    return fetchPosts(userId);
  })
  .then((posts) => {
    const firstPostId = posts[0].id;

    // Fetch comments
    return fetchComments(firstPostId);
  })
  .then((comments) => {
    const firstComment = comments[0];

    console.log(firstComment.body);
  })
  .catch((error) => {
    console.log(error);
  });
