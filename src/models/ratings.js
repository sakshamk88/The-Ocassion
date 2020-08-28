const mongoose = require("mongoose");

const ratingsSchema = mongoose.Schema({
  propertyId: {
    type: new mongoose.Schema.Types.ObjectId(),
    required: true,
  },
});
