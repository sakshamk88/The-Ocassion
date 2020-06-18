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
    session = req.session;
    if (user) {
      const sessionUser = sessionizeUser(user);

      req.session.user = sessionUser;
      console.log(session.user);
      res.status(200).send(sessionUser);
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
    if (user) {
      //   req.session.destroy((err) => {
      //     if (err) console.log(err);
      //     res.clearCookie(process.env.SESS_NAME);
      //     res.send(session);
      //   });
      const user = session.user;

      res.send(user);
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.log(session);
    res.status(422).send(JSON.stringify(err));
  }
});

sessionRouter.get("/", (req, res) => {
  res.send(req.session.id);
});

module.exports = sessionRouter;
