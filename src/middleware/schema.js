const schemaValidator = require("jsonschema").Validator;

var v = new schemaValidator();

var credschema = {
  id: "/loginSchema",
  type: "object",
  properties: {
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["email", "password"],
};

var propertySchema = {
  id: "/propertySchema",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    size: {
      type: "number",
    },
    address: {
      type: "string",
    },
    capacity: {
      type: "number",
    },
    features: {
      type: "array",
      items: { type: "string" },
    },
    price: {
      type: "number",
    },
  },
  required: ["name", "size", "address", "capacity", "features", "price"],
};

var userSchema = {
  id: "/userSchema",
  type: "object",
  properties: {
    name: {
      type: "string",
    },

    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
    address: {
      type: "string",
    },
    phoneNo: {
      type: "number",
    },
    aadhaarNo: {
      type: "string",
    },
    firmName: {
      type: "string",
    },
    staffNo: {
      type: "number",
    },
    experience: {
      type: "number",
    },
    website: {
      type: "string",
    },

    role: {
      type: "string",
    },
  },
  required: [
    "name",
    "email",
    "password",
    "address",
    "aadhaarNo",
    "firmName",
    "staffNo",
    "experience",
    "role",
  ],
};

const loginChecker = (data) => {
  v.addSchema(credschema, "/loginSchema");
  const result = v.validate(data, credschema);
  return result;
};

const propChecker = (data) => {
  v.addSchema(propertySchema, "/propertySchema");
  const result = v.validate(data, propertySchema);
  return result;
};

const userChecker = (data) => {
  v.addSchema(userSchema, "/userSchema");
  const result = v.validate(data, userSchema);
  return result;
};

module.exports = {
  loginChecker: loginChecker,
  propChecker: propChecker,
  userChecker: userChecker,
};
