const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    size: {
      type: Number,
      default: false,
    },
    address: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    features: [
      {
        feature: {
          type: String,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        rate: {
          type: Number,
          default: 3,
        },
        review: {
          type: String,
        },
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("Bookings", {
  ref: "bookings",
  localField: "_id",
  foreignField: "property",
});

const Properties = mongoose.model("Properties", propertySchema);

module.exports = Properties;
