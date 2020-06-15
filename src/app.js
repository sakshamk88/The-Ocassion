const express = require("express");

require("../db/mongoose");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log(`Example app listening at port : ${port}`));
