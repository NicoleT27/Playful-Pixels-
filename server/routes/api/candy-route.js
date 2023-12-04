const express = require("express");
const router = express.Router();
const Candy = require("../../models/candy");

router.post("/candy/candy", async (req, res) => {
  res.send("hello this is the candy crush game");
});

module.exports = router;
