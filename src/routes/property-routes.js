const express = require("express");
const router = new express.Router();
const Property = require("../models/property");
const auth = require("../middleware/auth");

router.post("/property", auth, async (req, res) => {
  const property = new Property({
    ...req.body,
    owner: req.user._id,
  });
  try {
    await property.save();
    res.status(201).send(property);
  } catch (e) {
    res.status(500).send(e);
  }
});
