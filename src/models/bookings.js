const mongoose = require("mongoose");
//const validator = require("validator");

const bookingSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Properties",
  },
  customerName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
    minlength: 10,
  },
  ocassion: {
    type: String,
    required: true,
  },

  date: {
    type: Date,

    validate(value) {
      if (false) {
        throw new Error("The date is not valid.");
      }
    },
  },
  time: {
    type: String,
    required: true,
    validate(value) {
      if (!(value === "day" || value === "night")) {
        throw new Error(
          "The time should be selected from the given values only."
        );
      }
    },
    default: "day",
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
    default: "Low",
  },
  tokenMoney: {
    type: Number,
    required: true,
    default: 0,
  },
  status: {
    type: String,
    required: true,
    default: "Booked",
  },
  addOn: {
    type: String,

    default: "",
  },
});

const Bookings = mongoose.model("Bookings", bookingSchema);

module.exports = Bookings;
