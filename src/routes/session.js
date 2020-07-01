const express = require("express");
const User = require("../models/user");
const { sessionizeUser, filterdata } = require("../utils/helper");
const { loginChecker, propChecker } = require("../middleware/schema");

const sessionRouter = new express.Router();

//route to login
sessionRouter.post("", async (req, res) => {
  try {
    const result = loginChecker(req.body);
    if (result.errors.length != 0) {
      console.log(result);
      res.status(400).send({
        Error: result.errors.map((error) => {
          return `${error.argument} is required!`;
        }),
      });
      return;
    }

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
    res.status(500).send(e);
  }
});

//return user details
sessionRouter.post("/profile", async (req, res) => {
  const session = req.session;
  if (!session.user) {
    res.status(401).send("You are nort authorised.");
  }
  try {
    const userData = await User.findById(session.user.userId);

    if (!userData) {
      res.status(500).send("There is no user with this id.");
    }
    data = filterdata(userData);
    res.status(200).send(data);
  } catch (err) {}
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

//Test API
sessionRouter.get("", (req, res) => {
  console.log(req.session.id);
  res.send(req.session.user);
});

//Route to book a priority
sessionRouter.post("/property", async (req, res) => {
  const result = propChecker(req.body);
  if (result.errors.length != 0) {
    res.status(400).send(
      result.errors.map((error) => {
        return `${error.argument} is required!`;
      })
    );
  }
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

module.exports = sessionRouter;
