const express = require("express");
const router = new express.Router();
const User = require("../models/user");
//const auth = require("../middleware/auth");
const {
  loginChecker,
  propChecker,
  userChecker,
} = require("../middleware/schema");
const { sessionizeUser } = require("../utils/helper");

//route to register
router.post("", async (req, res) => {
  try {
    const result = userChecker(req.body);
    if (result.errors.length !== 0) {
      //console.log(result);
      res.status(401).send({
        Errors: result.errors.map((error) => {
          return `${error.argument} is required!`;
        }),
      });
      return;
    }
    const user = new User(req.body);
    const sessionUser = sessionizeUser(user);
    await user.save();

    //sendWelcomeMail(user.email, user.name);
    //const token = await user.generateAuthToken();
    req.session.user = sessionUser;
    //console.log(req.session.user);
    res.status(201).send(sessionUser);
  } catch (e) {
    res.status(500).send(JSON.stringify(e));
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
