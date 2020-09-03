const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const Property = require("../models/property");
const auth = require("../middleware/auth");
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
//ADMIN UTILITIES APIS

//to get all the users who have access to a specific property
router.get("", auth, async (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(401).send({ Error: "User not authorised." });
  }
  const property = await Property.findById(req.session.propertyId);

  //getting all users other than admin

  const authUsers = property.accessTo.forEach(async (user) => {
    return await User.findById(user.userId);
  });
  if (!authUsers.length) {
    res.status(204).send({ Error: "No user found." });
  }

  res.status(200).send(authUsers);
});

//to remove a user from access rights of property
router.delete("/:uId", auth, async (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(401).send({ Error: "User not Authorised" });
    return;
  }
  try {
    const property = await Property.findById(req.session.propertyId);

    const updatedAccess = property.accessTo.filter((user) => {
      return user.userId !== req.params.uId;
    });
    await Property.findByIdAndUpdate(req.session.user.userId, {
      accessTo: updatedAccess,
    });
    req.status(200).send("User Removed Successfully");
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});

//to update a user details by admin
router.put("/:uId", auth, (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(401).send({ Error: "User not Authorised" });
    return;
  }

  const updatedData = [];
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
