const lifeModel = require("../models/life.js");
const gameOfLife = require("../services/gameOfLife.js");

const update = (req, res) => {
  lifeModel.set(req.body);
  res.json(lifeModel.get());
};

const get = (req, res) => {
  res.json(lifeModel.get());
};

const next = (req, res) => {
  lifeModel.set(gameOfLife.nextGeneration(lifeModel.get()));
  res.json(lifeModel.get());
};

module.exports = { update, get, next };
