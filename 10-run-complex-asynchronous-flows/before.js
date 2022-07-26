import {
  fetchAlbums,
  fetchAllUsers,
  fetchPhotos,
  updateUser,
} from "../utils/api.js";

const users = await fetchAllUsers();

for (const user of users) {
  console.log(`Fetching albums for user ${user.id}`);
  const albums = await fetchAlbums(user.id);

  let photosCount = 0;
  console.log(`Fetching photos for user ${user.id}`);
  for (const album of albums) {
    const photos = await fetchPhotos(album.id);
    photosCount += photos.length;
  }

  user.photosCount = photosCount;
  console.log(`Updating user ${user.id}`);
  await updateUser(user);
}

console.log("Done!");
