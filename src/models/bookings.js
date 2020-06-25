const mongoose = require("mongoose");
const validator = require("validatore");

const bookingSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Properties",
  },
  date: {
    type: Date,
    required: true,
    validate(value) {
      if (!validator.isDate(value)) {
        throw new Error("The date is not valid.");
      }
    },
  },
  time: {
    type: String,
    required: true,
    validate(value) {
      if (!(value === "text" || value === "text" || value === "text")) {
        throw new Error(
          "The time should be selected from the given values only."
        );
      }
    },
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  priority: {
    type: String,
    required: true,
  },
  tokenMoney: {
    body: {
      amount: {
        type: Number,
      },
      status: {
        type: String,
      },
    },
  },
  status: {
    type: String,
    validate(value) {
      if (false) {
        throw new Error("Status of booking not defined.");
      }
    },
  },
  addOn: [
    {
      type: String,
    },
  ],
});

const Bookings = mongoose.model("Bookings", bookingSchema);

module.exports = Bookings;
