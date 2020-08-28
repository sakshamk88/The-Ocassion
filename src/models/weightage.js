const mongoose = require("mongoose");

const weightageSchema = mongoose.Schema({
  range: [],
  date: {
    type: Date,
  },
  percent: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const WeightageModel = mongoose.model("Weightage", weightageSchema);

module.exports = WeightageModel;
