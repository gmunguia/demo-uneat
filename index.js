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

let life = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const getCell = (life, x, y) => life[y] && life[y][x];

const getNeighbors = (life, x, y) => [
  getCell(life, x - 1, y - 1),
  getCell(life, x - 1, y),
  getCell(life, x - 1, y + 1),
  getCell(life, x, y - 1),
  getCell(life, x, y + 1),
  getCell(life, x + 1, y - 1),
  getCell(life, x + 1, y),
  getCell(life, x + 1, y + 1)
];

const countAliveNeighbors = (life, x, y) => {
  const add = (a, b) => a + b;

  return getNeighbors(life, x, y)
    .filter(neighbor => neighbor != undefined)
    .reduce(add, 0);
}

const nextGeneration = life =>
  life.map((row, y) => row.map((cell, x) => {
    if (cell === 1 && [2, 3].includes(countAliveNeighbors(life, x, y))) {
      return 1;
    }
    if (cell === 0 && countAliveNeighbors(life, x, y) === 3) {
      return 1;
    }
    return 0;
  }));

server.get("/life", (req, res) => {
  res.json(life);
});

server.post("/life", (req, res) => {
  life = req.body;
  res.json(life);
});

server.post("/life/next", (req, res) => {
  life = nextGeneration(life);
  res.json(life);
});

server.listen(3000);
