import { insertComment, insertHashtag } from "../utils/api.js";
import { extractHashtag } from "../utils/helpers.js";

const commentWithoutHashtag = "That is a very fine line of code.";
const hashtag = extractHashtag(commentWithoutHashtag);

insertComment(commentWithoutHashtag)
  .then((commentId) => {
    if (hashtag) {
      // Ugh this nesting starts to look like callback hell..
      return insertHashtag(hashtag, commentId).then(() => {
        return commentId;
      });
    }

    return commentId;
  })
  .then((commentId) => {
    console.log("Comment ID is", commentId);
  })
  .catch((error) => {
    console.log(error);
  });
