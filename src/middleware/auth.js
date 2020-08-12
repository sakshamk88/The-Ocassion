const auth = async (req, res, next) => {
  try {
    const session = req.session;
    if (!session.user) {
      res.status(401).send({ Error: "User not authenticated." });
      return;
    }
    next();
  } catch (error) {
    res.status(500).send({ Error: "Server Failed." });
  }
};

module.exports = auth;
