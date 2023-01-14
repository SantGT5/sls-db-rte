const express = require("express");
const invalidRouter = express.Router();

const { RouterNotFound } = require("./invalidRouter.controller");

invalidRouter.use(RouterNotFound);

module.exports = invalidRouter;
