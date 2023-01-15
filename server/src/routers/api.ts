import express, { Router } from "express";

import { userRouter } from "./user/user.router";
import { invalidRouter } from "./invalidRouter/invalidRouter.router";

const api: Router = express.Router();

api.use("/users", userRouter);
api.use(invalidRouter);

export { api };
