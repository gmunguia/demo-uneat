const express = require("express");
const lifeController = require("../controllers/life.js");

const router = express.Router();

router.get("/", lifeController.get);
router.post("/", lifeController.update);
router.post("/next", lifeController.next);

module.exports = router;
