const express = require("express");
const weightRouter = express.Router();
const weightage = require("../models/weightage");
const auth = require("../middleware/auth");

//weightage api
weightRouter.post("", auth, (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(401).send("User is not Authorised.");
  }
  const weightData = {};
  res.status(200).send("Api successful.");
});

module.exports = weightRouter;
