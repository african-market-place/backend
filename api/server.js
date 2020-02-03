const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/middleware/authenticate-middleware");
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const itemsRouter = require("../items/items-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/items", authenticate, itemsRouter);

module.exports = server;
