const express = require("express");
const Candy = require("../../models/candy");

const router = express.Router();

router.get("/candy", async (req, res) => {
   res.send("hello this is the candy crush game")
});



module.exports = router;
