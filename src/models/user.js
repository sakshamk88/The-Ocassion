const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is not valid.");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
      validate(value) {
        if (validator.contains(value.toLowerCase(), "password")) {
          throw Error("The password cannot contain 'password'");
        }
      },
    },
    address: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
      minlength: 10,
    },
    aadhaarNo: {
      type: String,
      required: true,
      minlength: 16,
    },
    firmName: {
      type: String,
      required: true,
    },
    staffNo: {
      type: Number,
    },
    experience: {
      type: Number,
    },
    firmName: {
      type: String,
    },
    website: {
      type: String,
    },

    role: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    avatar: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
);
//linking models

userSchema.virtual("propertirs", {
  ref: "Properties",
  localField: "_id",
  foreignField: "owner",
});
//fetching details
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;
  delete userObject.avatar;

  return userObject;
};

//Token or session key generation
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.WEBTOKEN_SECRET
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//login checkup
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Unable to login.There is no account with this email.");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login.");
  }

  return user;
};

//Hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  if (user.isModified("aadhaarNo")) {
    user.aadhaarNo = await bcrypt.hash(user.password, 8);
  }

  next();
});

//Model Generation
const User = mongoose.model("User", userSchema);

module.exports = User;
