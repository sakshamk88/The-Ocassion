const express = require("express");
const sessionRouter = new express.Router();
const User = require("../models/user");
//const auth = require("../middleware/auth");
const { parseError, sessionizeUser } = require("../utils/helper");

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
      res.send(sessionUser);
    } else {
      throw new Error("invalid details.");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

//route to logout
sessionRouter.delete("", ({ session }, res) => {
  // req.user.tokens = req.user.tokens.filter((token) => {
  //   return token.token !== req.token;
  // });
  // await req.user.save();

  // res.send();
  //console.log(session);
  //const user = session.user;
  // if () {
  //   session.destroy((err) => {
  //     if (err) throw err;
  //     res.clearCookie(process.env.SESS_NAME);
  //     res.send("Logged out successfully");
  //   });
  // } else {
  //   throw new Error("Something went wrong");
  // }
  try {
    const user = session.user;
    if (user) {
      session.destroy((err) => {
        if (err) throw err;
        res.clearCookie(process.env.SESS_NAME);
        res.send(user);
      });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    res.status(422).send(parseError(err));
  }
});

module.exports = sessionRouter;
