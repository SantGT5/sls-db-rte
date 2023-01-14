const express = require("express");

const usersRouter = require("./user/user.router");
const invalidRouter = require("./invalidRouter/invalidRouter.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use(invalidRouter);

module.exports = api;
