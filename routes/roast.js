const express = require("express");
const router = express.Router();
const { getRoast } = require("../controllers/roastController");

router.post("/roast", getRoast);

module.exports = router;
