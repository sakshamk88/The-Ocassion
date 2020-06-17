const parseError = (err) => {
  if (err) return err;
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
};

const sessionizeUser = (user) => {
  return { userId: user._id, username: user.name };
};

module.exports = { parseError: parseError, sessionizeUser: sessionizeUser };
