const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const lifeRoutes = require("./routes/life.js");

const server = express();
server.use(bodyParser.json());

server.use(cors());

server.get("/hello", (req, res) => {
  res.send("Hello World");
});

server.post("/echo", (req, res) => {
  res.json(req.body);
});

server.use("/life", lifeRoutes);

server.listen(process.env.PORT || 8080);
