const express = require("express");
const userRouter = require("./routes/user-routes");
require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);

module.exports = app;
