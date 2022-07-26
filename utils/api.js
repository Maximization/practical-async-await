import fetch from "node-fetch";
import { setTimeout } from "node:timers/promises";

const URL = "https://jsonplaceholder.typicode.com";

/**
 * Users
 */
export function fetchUser(userId, callback) {
  (async () => {
    try {
      const response = await fetch(`${URL}/users/${userId}`);
      const user = await response.json();
      callback(null, user);
    } catch (error) {
      callback(error);
    }
  })();
}

export async function fetchUserById(userId) {
  const response = await fetch(`${URL}/users/${userId}`);
  const user = await response.json();
  return user;
}

export async function fetchUserSlow(userId) {
  const response = await fetch(`${URL}/users/${userId}`);
  const user = await response.json();
  await setTimeout(10000);
  return user;
}

export async function fetchUserByUsername(username) {
  const response = await fetch(`${URL}/users?username=${username}`);
  const users = await response.json();
  return users[0];
}

export async function fetchAllUsers() {
  const response = await fetch(`${URL}/users`);
  const users = await response.json();
  return users;
}

export async function updateUser(user) {
  const response = await fetch(`${URL}/users/${user.id}`, {
    method: "PUT",
    body: JSON.stringify(user),
  });
  const newUser = response.json();
  return newUser;
}

/**
 * Posts
 */
export async function fetchPosts(userId) {
  const response = await fetch(`${URL}/posts?userId=${userId}`);
  const posts = await response.json();
  return posts;
}

/**
 * Comments
 */
export async function fetchComments(postId) {
  const response = await fetch(`${URL}/comments?postId=${postId}`);
  const comments = await response.json();
  return comments;
}

export async function insertComment(body) {
  const response = await fetch(`${URL}/comments`, {
    method: "POST",
    body: JSON.stringify({ body }),
  });
  const comment = await response.json();
  return comment.id;
}

// JSONPlaceholder API doesn't have a hashtag resource, return
// a mock ID and do nothing instead
export async function insertHashtag(hashtag, commentId) {
  const hashtagId = 1;
  return hashtagId;
}

/**
 * Photos
 */
export async function fetchPhoto(photoId) {
  const response = await fetch(`${URL}/photos/${photoId}`);
  const photo = await response.json();
  return photo;
}

export async function fetchPhotos(albumId) {
  const response = await fetch(`${URL}/photos?albumId=${albumId}`);
  const photos = await response.json();
  return photos;
}

/**
 * Albums
 */
export async function fetchAlbums(userId) {
  const response = await fetch(`${URL}/albums?userId=${userId}`);
  const albums = await response.json();
  return albums;
}
