const express = require("express");
const propertyRouter = new express.Router();
const Property = require("../models/property");
const auth = require("../middleware/auth");

propertyRouter.post("", async (req, res) => {
  req.body.owner = req.session.user.userId;
  const property = new Property({
    ...req.body,
  });
  console.log(req.body);
  try {
    await property.save();
    res.status(201).send({ propertyID: property._id });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = propertyRouter;
