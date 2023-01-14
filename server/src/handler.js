const serverless = require("serverless-http");

// Run Express
const express = require("express");
const app = express();
app.use(express.json());

const api = require('./routers/api')

app.use(api);

module.exports.handler = serverless(app);
