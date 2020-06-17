const userRoutes = require("./user-routes");
const sessionRoutes = require("./session");

// app.use((req, res, next) => {
//   res
//     .status(503)
//     .send("The site is currently in mainainance. Please come again later.");
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

module.exports = { userRouter: userRoutes, sessionRouter: sessionRoutes };
