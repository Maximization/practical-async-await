import db from "../utils/db.js";
import {
  getResumeToken,
  saveResumeToken,
  processData,
} from "../utils/helpers.js";

const resumeToken = await getResumeToken();
const changeStream = db.users.watch({ resumeToken });

changeStream.on("change", async (data) => {
  console.log("Processing data with ID:", data.id);
  await processData(data);

  // Save ID as resume token to keep track of progress
  await saveResumeToken(data.id);
  console.log("Done! Token is", data.id);
});
