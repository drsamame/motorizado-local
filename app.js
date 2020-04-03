const express = require("express"),
  { Nuxt } = require("nuxt"),
  path = require("path"),
  fs = require("fs-extra");

const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// Create App
const app = express();
app.use(
  "/_nuxt",
  express.static(path.join(__dirname, ".nuxt", "dist", "client"))
);

// Set API Gateway Middleware
app.use(awsServerlessExpressMiddleware.eventContext());

// Add Nuxt
let config = require("./nuxt.config.js");
config.dev = process.env.NODE_ENV === "development";
const nuxt = new Nuxt(config);

const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);

app.disable("x-powered-by");

app.use(async (req, res, next) => {
    console.log(req.url)
  await nuxt.ready();
  nuxt.render(req, res, next);
});

module.exports = app;
