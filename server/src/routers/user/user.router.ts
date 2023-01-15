import express, { Router } from "express"
const userRouter: Router = express.Router()

import { HttpGetUserById, HttpEditUser } from "./user.controller"

import { userValidator } from "../../validation/userValidator"

userRouter.get("/:userId", HttpGetUserById)
userRouter.put("/", userValidator, HttpEditUser)

export { userRouter }
