import { insertComment, insertHashtag } from "../utils/api.js";
import { extractHashtag } from "../utils/helpers.js";

const comment = "That is a very fine line of code. #dry";
const hashtag = extractHashtag(comment);

try {
  const commentId = await insertComment(comment);
  await insertHashtag(hashtag, commentId);
  console.log("Comment ID is", commentId);
} catch (error) {
  console.log(error);
}
