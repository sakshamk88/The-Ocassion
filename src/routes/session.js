const express = require("express");

const User = require("../models/user");
//const auth = require("../middleware/auth");
const { sessionizeUser } = require("../utils/helper");
const sessionRouter = new express.Router();
const test = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    throw new Error("kachra ho gya!!");
  }
};
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
    console.log(session.id);
    if (user) {
      session.destroy((err) => {
        if (err) console.log(err);
        res.clearCookie(process.env.SESS_NAME);
        res.send(session.id);
      });
    } else {
      throw new Error("Something went wrong");
    }
  } catch (err) {
    console.log(session);
    res.status(422).send(JSON.stringify(err));
  }
});

sessionRouter.get("", (req, res) => {
  console.log(req.session).id;
  res.send(req.session);
});

module.exports = sessionRouter;
