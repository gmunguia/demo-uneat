const express = require("express");
const bodyParser = require("body-parser");

const server = express();
server.use(bodyParser.json());

server.get("/hello", (req, res) => {
  res.send("Hello World");
});

server.post("/echo", (req, res) => {
  res.json(req.body);
});

let life = [];

server.get("/life", (req, res) => {
  res.json(life);
});

server.post("/life", (req, res) => {
  life = req.body;
  res.json(life);
});

server.listen(3000);
