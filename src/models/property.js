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
      default: 1000,
    },
    address: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      default: 500,
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
      default: 1000,
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
    accessTo: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
        },
        role: {
          type: String,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

propertySchema.virtual("Bookings", {
  ref: "bookings",
  localField: "_id",
  foreignField: "propertyId",
});

const Properties = mongoose.model("Properties", propertySchema);

module.exports = Properties;
