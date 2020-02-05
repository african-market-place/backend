const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const itemsRouter = require("../items/items-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", async (req, res) => {
  try {
    const shoutouts = await db("shoutouts");
    const messageOfTheDay = process.env.MOTD || "Hello World!"; // add this line
    res.status(200).json({ motd: messageOfTheDay, shoutouts }); // change this line
  } catch (error) {
    console.error("\nERROR", error);
    res.status(500).json({ error: "Cannot retrieve the shoutouts" });
  }
});

server.get("/", (req, res) => {
  res.send("Welcome to Your African-European Marketplace");
});

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/items", itemsRouter);

module.exports = server;
