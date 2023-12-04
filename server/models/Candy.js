const { Schema, model } = require("mongoose");

const candySchema = new Schema({
  color: {
    type: String,
    required: true,
    enum: ["red", "blue", "green", "yellow", "purple", "orange"],
  },
  points: {
    type: Number,
    default: 10,
  },
  isSpecial: {
    type: Boolean,
    default: false,
  },
  specialType: {
    type: String,
    enum: ["striped", "wrapped", "colorBomb"],
  },
});

const Candy = model("Candy", candySchema);

module.exports = Candy;
