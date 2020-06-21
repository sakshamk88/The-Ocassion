const express = require("express");

const User = require("../models/user");
//const auth = require("../middleware/auth");
const { sessionizeUser } = require("../utils/helper");
const sessionRouter = new express.Router();

//route to login
sessionRouter.post("", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    //const token = await user.generateAuthToken();
    // if (!user) {
    //   res.send("Please enter valid credentials.");
    // }

    if (user) {
      const sessionUser = sessionizeUser(user);

      req.session.user = sessionUser;

      console.log(req.session.id);
      res.send(req.session.user);
    } else {
      throw new Error("invalid details.");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

//route to logout
sessionRouter.delete("", ({ session }, res) => {
  try {
    const user = session.user;

    if (user) {
      console.log(session.id);
      session.destroy((err) => {
        if (err) console.log(err);
        res.clearCookie(process.env.SESS_NAME);
        res.send(session.id);
      });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    //console.log("things went wrong!");
    res.send(err);
  }
});

sessionRouter.get("", (req, res) => {
  console.log(req.session.id);
  res.send(req.session.user);
});

module.exports = sessionRouter;
