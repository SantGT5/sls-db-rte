import express, { Router } from "express";
const userRouter: Router = express.Router();

import { HttpGetUserById, HttpEditUser } from "./user.controller"

userRouter.get("/:userId", HttpGetUserById);
userRouter.put("/", HttpEditUser);

export { userRouter };
