const express = require("express");
const userRouter = express.Router();

const { HttpGetUserById, HttpEditUser } = require("./user.controller");

userRouter.get("/:userId", HttpGetUserById);
userRouter.put("/", HttpEditUser);

module.exports = userRouter;
