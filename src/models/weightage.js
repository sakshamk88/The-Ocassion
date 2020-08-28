const mongoose = require("mongoose");

const weightageSchema = mongoose.Schema({
  dates: [
    {
      date: {
        type: Date,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const WeightageModel = mongoose.model("Weightage", weightageSchema);

module.exports = WeightageModel;
