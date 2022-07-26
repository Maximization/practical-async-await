import express from "express";
import { fetchUserById } from "../utils/api.js";

const app = express();

app.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  const user = await fetchUserById(userId);

  res.status(200).json(user);
});

app.listen(3000, () => console.log("Server listening on port 3000"));
