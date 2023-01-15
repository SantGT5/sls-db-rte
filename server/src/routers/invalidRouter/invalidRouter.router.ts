import express, { Router } from "express"
const invalidRouter: Router = express.Router()

import { RouterNotFound } from "./invalidRouter.controller"

invalidRouter.use(RouterNotFound)

export { invalidRouter }
