const express = require("express");
const router = express.Router();
const Candy = require("../../models/Candy");

///api/candy routes


// /api/candy/candy
router.post("/candy", async (req, res) => {
  res.send("hello this is the candy crush game");
});

module.exports = router;
