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

server.get("/", (req, res) => {
  res.send("Welcome to Your African-European Marketplace");
});

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/items", itemsRouter);

module.exports = server;
