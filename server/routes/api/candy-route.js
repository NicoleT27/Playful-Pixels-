const express = require("express");
const router = express.Router();
const Candy = require("../../models/Candy");

const mockInfo = {
   name:"Candy crush"
}

router.get("/candy",(req, res) => {
   // res.send("hello this is the candy crush game")
   res.json(mockInfo);
});



module.exports = router;
