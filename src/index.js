const app = require("./app");
const port = process.env.PORT;

// app.use((req, res, next) => {
//   res
//     .status(503)
//     .send("The site is currently in mainainance. Please come again later.");
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
