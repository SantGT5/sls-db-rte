import serverless from "serverless-http"
import express, { Express } from "express"

import { api } from "./routers/api"

const app: Express = express()
app.use(express.json())

app.use(api)

module.exports.handler = serverless(app)
