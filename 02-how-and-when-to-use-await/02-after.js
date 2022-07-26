import express from "express";
import { fetchUserById, fetchUserSlow } from "../utils/api.js";

const app = express();

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  console.log(`Fetching user ${userId}`);
  const user = await fetchUserById(userId);
  console.log(`Fetched user ${userId}`);

  res.status(200).json(user);
});

app.get("/user-slow/:id", async (req, res) => {
  const userId = req.params.id;

  console.log(`Fetching user slow ${userId}`);
  const user = await fetchUserSlow(userId);
  console.log(`Fetched user slow ${userId}`);

  res.status(200).json(user);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
