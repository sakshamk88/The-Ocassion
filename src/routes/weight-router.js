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

weightRouter.put("", auth, async (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(401).send("User is not Authorised.");
  }

  if (req.body.rangepicker) {
    const stat = req.body.type;
    const weight = req.body.percent;

    const start = req.body.rangepicker[0];
    const end = req.body.rangepicker[1];

    const range = getDates(start, end);

    const prevData = await weightage.findOne({
      userId: req.session.user.userId,
    });

    range.forEach((date) => {
      prevData.dates.push({
        date: moment(date).format("YYYY-MM-DD"),
        type: stat,
        weight: weight,
      });
    });
    prevData.dates.splice(0, 1);
    await weightage.findOneAndUpdate(
      { userId: req.session.user.userId },
      { dates: prevData.dates }
    );

    res
      .status(200)
      .send({ message: "Weight saved successfully", id: prevData._id });
  } else {
    const sdate = req.body.datepicker;

    const prevData = await weightage.findOne({
      userId: req.session.user.userId,
    });

    prevData.dates.push({
      date: moment(sdate).format("YYYY-MM-DD"),
      type: stat,
      weight: weight,
    });
    prevData.dates.splice(0, 1);
    await weightage.findOneAndUpdate(
      { userId: req.session.user.userId },
      { dates: prevData.dates }
    );
    res
      .status(200)
      .send({ message: "Weight saved successfully", id: prevData._id });
  }

  // } catch (error) {
  //   res.status(500).send({ Error: error });
  // }
});

module.exports = weightRouter;
