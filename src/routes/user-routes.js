const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const Property = require("../models/property");
const auth = require("../middleware/auth");
const Weightage = require("../models/weightage");
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

    const newId = new Weightage({
      dates: [],
      userId: user._id,
    });

    await newId.save();

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
    return;
  }
  const property = await Property.findById(req.session.propertyId);

  //getting all users other than admin

  const authUsers = [];
  property.accessTo.forEach(async (user) => {
    authUsers.push(await User.findById(user.userId));
  });
  if (!authUsers.length) {
    res.status(404).send({ Error: "No user found." });
    return;
  }
  authUsers.push(await User.findById(req.session.user.userId));

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
router.put("/:uId", auth, async (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(401).send({ Error: "User not Authorised" });
    return;
  }
  try {
    const updatedData = req.body;

    await User.findByIdAndUpdate(req.params.uId, updatedData);
    res.status(200).send("Used Data Updated Successfully.");
  } catch (error) {
    res.status(500).send({ Error: error });
  }
});
//adding a user by admin
router.post("adduser", async (req, res) => {
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
    await user.save();

    const access = await Property.findOne({
      _id: req.session.propertyId,
    }).select("accessTo");

    access.push({
      userId: user._id,
      role: user.role,
    });

    await Property.findByIdAndUpdate(req.session.propertyId, {
      accessTo: access,
    });

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
