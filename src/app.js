const express = require("express");
const userRouter = require("./routes/user-routes");
const connectStore = require("connect-mongo");
const session = require("express-session");
const mongoose = require("mongoose");
require("./db/mongoose");

const app = express();
app.disable("x-powered-by");
const MongoStore = connectStore(session);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "session",
      ttl: parseInt(process.env.SESS_LIFETIME) / 1000,
    }),
    cookie: {
      sameSite: true,
      secure: process.env.NODE_ENV === "development",
      maxAge: parseInt(process.env.SESS_LIFETIME),
    },
  })
);
app.use(userRouter);
module.exports = app;
