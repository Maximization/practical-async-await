import { insertComment, insertHashtag } from "../utils/api.js";
import { extractHashtag } from "../utils/helpers.js";

const comment = "That is a very fine line of code. #dry";
const hashtag = extractHashtag(comment);

insertComment(comment)
  .then((commentId) => {
    return insertHashtag(hashtag, commentId);
  })
  .then((hashtagId) => {
    // how do we use commentId in this code block?
    console.log("Comment ID is", commentId);
  })
  .catch((error) => {
    console.log(error);
  });
