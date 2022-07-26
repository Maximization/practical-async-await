import {
  fetchAlbums,
  fetchAllUsers,
  fetchPhotos,
  updateUser,
} from "../utils/api.js";

const users = await fetchAllUsers();

await Promise.all(
  users.map(async (user) => {
    console.log(`Fetching albums for user ${user.id}`);
    const albums = await fetchAlbums(user.id);

    console.log(`Fetching photos for user ${user.id}`);
    const photos = await Promise.all(
      albums.map((album) => fetchPhotos(album.id))
    );

    console.log(`Updating user ${user.id}`);
    user.photosCount = photos.flat().length;
    return updateUser(user);
  })
);

console.log("Done!");
