const express = require("express");
const { userRouter, sessionRouter } = require("./routes/index");
const cookieParser = require("cookie-parser");
const connectStore = require("connect-mongo");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bookingrouter = require("./routes/booking-routes");
require("./db/mongoose");

const publicDirectoryPath = path.join(__dirname, "../public");
const app = express();

app.disable("x-powered-by");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});

app.use(express.static(publicDirectoryPath));
const MongoStore = connectStore(session);

app.use(
  session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      collection: "sessions",
      ttl: parseInt(process.env.SESS_LIFETIME) / 1000,
    }),
    cookie: {
      path: "/",
      sameSite: true,
      secure: process.env.NODE_ENV === "production",
      expires: parseInt(process.env.SESS_LIFETIME),
    },
  })
);

const apiRouter = express.Router();
// app.set("static", path.join(__dirname, "./public"));
apiRouter.use("/users", userRouter);
apiRouter.use("/session", sessionRouter);
apiRouter.use("/bookings", bookingrouter);

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});

module.exports = app;
