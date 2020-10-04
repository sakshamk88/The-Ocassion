const Property = require("../models/property.js");

const auth = async (req, res, next) => {
  // try {
  const session = req.session;
  if (!session.user) {
    res.status(401).send({ Error: "User not authenticated." });
    return;
  }
  const property = await Property.findById(req.session.propertyId);
  console.log(property);
  const hasAccess = property.accessTo.filter((user) => {
    return user.userId === req.session.user.userId;
  });
  const isOwner = property.owner == req.session.userId;

  if (!hasAccess && !isOwner) {
    res.status(401).send({ Error: "User not authorised." });
    return;
  }
  next();
  // } catch (error) {
  //   res.status(500).send({ Error: "Server Failed." });
  // }
};

module.exports = auth;
