const express = require("express");
const { userRouter, sessionRouter } = require("./routes/index");

const connectStore = require("connect-mongo");
const session = require("express-session");
const mongoose = require("mongoose");
const port = process.env.PORT;
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

const apiRouter = express.Router();
app.use("/api", apiRouter);
apiRouter.use("/users", userRouter);
apiRouter.use("/session", sessionRouter);

app.listen(port, () => {
  console.log("Server running on port " + port);
});

module.exports = app;