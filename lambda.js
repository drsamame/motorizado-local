"use strict";
const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app.js");

const binaryMimeTypes = [
  "application/javascript",
  "application/json",
  "application/octet-stream",
  "application/xml",
  "font/eot",
  "font/opentype",
  "font/otf",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "text/comma-separated-values",
  "text/css",
  "text/html",
  "text/javascript",
  "text/plain",
  "text/text",
  "text/xml"
];
// const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes)
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);
