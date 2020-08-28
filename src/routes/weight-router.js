const express = require("express");
const weightRouter = express.Router();
const weightage = require("../models/weightage");
const auth = require("../middleware/auth");
const Moment = require("moment");
const MomentRange = require("moment-range");

const moment = MomentRange.extendMoment(Moment);

//weightage api
function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment(startDate);
  var stopDate = moment(stopDate);
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
    currentDate = moment(currentDate).add(1, "days");
  }
  return dateArray;
}

weightRouter.post("", auth, async (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(401).send("User is not Authorised.");
  }
  try {
    const start = req.body.rangepicker[0];
    const end = req.body.rangepicker[1];
    const range = getDates(start, end);

    const weightData = {
      range: range,
      date: req.body.datepicker ? req.body.datepicker : undefined,
      type: req.body.type,
      percent: req.body.percent,
    };
    const weight = new weightage(weightData);

    await weight.save();

    res
      .status(200)
      .send({ message: "Weight saved successfully", id: weight._id });
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});

module.exports = weightRouter;
