import express from "express";
import bodyParser from "body-parser";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "./User";

const app = express();
app.use(bodyParser.json());

app.listen(3333, () => {
  console.log("Server listening on port 3333");
});

app.get("/user", async (req, res) => {
  const users = await getAllUsers();

  res.send(users);
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUserById(id);

  res.send(user);
});

app.post("/user", async (req, res) => {
  const { userInfo } = req.body;
  const user = await createUser(userInfo);

  res.send(user);
});

app.put("/user/:id", async (req, res) => {
  const { userInfo } = req.body;
  const { id } = req.params;
  const user = await updateUser(userInfo, id);

  res.send(user);
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await deleteUser(id);

  res.sendStatus(user ? 200 : 400);
});
