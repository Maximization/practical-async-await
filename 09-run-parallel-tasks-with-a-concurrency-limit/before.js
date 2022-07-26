import { fetchPhoto } from "../utils/api.js";
import { generateArray } from "../utils/helpers.js";

// Create an array filled with numbers 1->N: [1, 2, 3, ..., N]
const photoIds = generateArray(50);

const photos = await Promise.all(
  photoIds.map((photoId) => {
    console.log(`Fetching photo with ID ${photoId}`);
    return fetchPhoto(photoId);
  })
);

console.log(`Fetched ${photos.length} photos`);
