import fs from "node:fs/promises";
import { setTimeout } from "node:timers/promises";

export function extractHashtag(comment) {
  const hashtag = comment.match(/#\S+/);
  return hashtag ? hashtag[0] : null;
}

// Create an array filled with numbers 1->N: [1, 2, 3, ..., N]
export function generateArray(N) {
  return [...Array(N + 1).keys()].splice(1);
}

export class TimeoutError extends Error {
  name = "TimeoutError";
}

export async function getResumeToken() {
  const resumeToken = await fs.readFile(
    new URL("resumeToken", import.meta.url),
    "utf8"
  );
  return resumeToken;
}

export async function saveResumeToken(resumeToken) {
  await fs.writeFile(new URL("resumeToken", import.meta.url), resumeToken);
}

// Pretend we're doing some data processing that might take
// between 0 and 2s
export async function processData(data) {
  await setTimeout(Math.random() * 2000);
}
