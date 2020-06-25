const parseError = (err) => {
  if (err) return err;
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
};

const sessionizeUser = (user) => {
  return { userId: user._id, username: user.name, role: user.role };
};

const filterdata = (user) => {
  return {
    name: user.name,
    email: user.email,
    phoneNo: user.phoneNo,
    address: user.address,
    firmName: user.firmName,
    role: user.role,
  };
};
module.exports = {
  parseError: parseError,
  sessionizeUser: sessionizeUser,
  filterdata: filterdata,
};
