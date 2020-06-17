const express = require("express");
const router = new express.Router();
const User = require("../models/user");
//const auth = require("../middleware/auth");
const { sessionizeUser } = require("../utils/helper");

//route to register
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    const sessionUser = sessionizeUser(user);
    await user.save();

    //sendWelcomeMail(user.email, user.name);
    //const token = await user.generateAuthToken();
    req.session.user = sessionUser;
    //console.log(req.session.user);
    res.status(201).send(sessionUser);
  } catch (e) {
    res.status(404).send(e);
  }
});

//route to login
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    //const token = await user.generateAuthToken();
    // if (!user) {
    //   res.send("Please enter valid credentials.");
    // }
    const sessionUser = sessionizeUser(user);
    req.session.user = sessionUser;
    res.send(sessionUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

//route to logout
router.post("/users/logout", (req, res) => {
  try {
    // req.user.tokens = req.user.tokens.filter((token) => {
    //   return token.token !== req.token;
    // });
    // await req.user.save();

    // res.send();
    console.log(req.session);
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
  } catch (e) {
    res.status(422).send();
  }
});

//route to logout of all devices
// router.post("/users/logoutAll", auth, async (req, res) => {
//   try {
//     req.user.tokens = [];
//     await req.user.save();
//     res.send(200);
//   } catch (error) {
//     res.status(500).send();
//   }
// });

module.exports = router;
