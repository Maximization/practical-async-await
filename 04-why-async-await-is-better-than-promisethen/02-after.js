import { insertComment, insertHashtag } from "../utils/api.js";
import { extractHashtag } from "../utils/helpers.js";

const commentWithoutHashtag = "That is a very fine line of code.";
const hashtag = extractHashtag(commentWithoutHashtag);

try {
  const commentId = await insertComment(commentWithoutHashtag);
  if (hashtag) {
    await insertHashtag(hashtag, commentId);
  }

  console.log("Comment ID is", commentId);
} catch (error) {
  console.log(error);
}
