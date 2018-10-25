/**
 * @description Express Code Coffee
 *
 * For this code coffee you will build a basic express server that exposes some simple api endpoints.
 * You will be doing this from scratch, you will have to install express yourself, too.
 *
 * You are only allowed to use the official documentation to get around:
 *   https://expressjs.com/en/api.html
 *
 * You will be going over increasingly complex problems.
 * The given tests are designed to be solved in-order.
 *
 * IMPORTANT: Do not listen on a port (start the server) as part of this function, this will be done by tests.
 * If you just want to run the server and test out the endpoints, look at testLessEntryPoint.js
 *
 * @returns a fully configured express server
 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const teapot = (req, res) => {
  res.status(418).end();
};

const hello = (req, res) => {
  //res.set("Content-Type", "text/html");
  res.send("world");
};

const helloJson = (req, res) => {
  res.json({ hello: "world" });
  // same with res.json().
  // res.send({ hello: "world" });
};

const greet = (req, res) => {
  res.send(`Hello ${req.query.name}!`);
};

const plus = (req, res) => {
  const sum = parseInt(req.params.a) + parseInt(req.params.b);
  res.json({ result: sum });
};

function postEcho(req, res) {
  res.json(req.body);
}

const optionsEcho = (req, res) => {
  const result = {};
  Object.keys(req.body).forEach((key) => {
    result[req.body[key]] = key;
  });
  res.json(result);
};

const getSecret = (req, res) => {
  if (Object.keys(req.query).length < 1) {
    res.status(401).end();
  }

  if (req.query.token % 2 > 0) {
    res.status(401).end();
  }

  res.status(200).end();
};

const postSecret = (req, res) => {
  if (!req.query.token || req.query.token % 2 > 0) {
    res.status(401).send("token is invalid.");
  }

  if (!req.body || parseInt(req.body.key) === undefined || req.body.shout === undefined) {
    res.status(403).send("missing value exists.");
  }

  res.status(200).send("polo");
};

const setupExpressServer = () => {
  // TODO: could be a problem if not using express.urlencoded({ extended: true })?
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.get("/teapot", teapot);
  app.get("/hello", hello);
  app.get("/hellojson", helloJson);
  app.get("/greet", greet);
  app.get("/:a/plus/:b", plus);
  app.route("/echo")
    .post(postEcho)
    .options(optionsEcho);
  app.get("/secret", getSecret);
  app.post("/secret/message", postSecret);

  return app;
};

module.exports = { setupExpressServer };
