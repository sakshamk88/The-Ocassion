const express = require("express");
const Bookings = require("../models/bookings");
const auth = require("../middleware/auth");
const bookingrouter = new express.Router();

//make a booking
bookingrouter.post("/book", auth, async (req, res) => {
  const session = req.session;
  if (!session.user) {
    res.status(401).send("You are not authenticated.");
  }
  try {
    if (
      !req.body.name ||
      !req.body.phoneno ||
      !req.body.ocassion ||
      !req.body.date
    ) {
      res.status(402).send({ Error: "REquired data is missing." });
    }
    const newBooking = new Bookings(req.body);
    await newBooking.save();
    res.status(200).send("Booking Made");
  } catch (err) {
    res.status(500).send(err);
  }
});

//get all the bookings of a particular owner(admin)
bookingrouter.get("", auth, async (req, res) => {
  const session = req.session;
  if (!session.user) {
    res.status(401).send("You are not authenticated.");
  }
  if (!(session.user.role === "admin")) {
    res.status(401).send("You are not authorised.");
  }

  //const allbookings = await Bookings.find().gt("date", new Date());
  try {
    const allBookings = await Bookings.findAll({ owner: session.user.userId });
    const currDate = new Date();
    const bookings = await allBookings.filter((booking) => {
      return booking.date >= currDate;
    });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

//get client specific bookings( only those for that specific client )
bookingrouter.post("/user", auth, async (req, res) => {
  const session = req.session;

  if (!session.user) {
    res
      .status(401)
      .send("You are not authenticated. No valid session provided.");
  }

  try {
    const currDate = new Date();
    const userBookings = await Bookings.findAll({ client: req.body.userId });
    const bookings = await userBookings.map((booking) => {
      return booking.date >= currDate;
    });
    if (!bookings) {
      throw new Error("Can't find any bookings for this user.");
    }
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

//check if the date is booked
bookingrouter.get("/isbooked", async (req, res) => {
  const propertyId = req.query.propertyId;
  const date = [req.query.day, req.query.month, req.query.year].join("-");

  try {
    const booking = Bookings.find({ propertyId: propertyId });
    const isBooked = date === booking.date;
    if (!isBooked) {
      res.status(200).send({ isBooked: false });
    }
    //console.log(date, propertyId);
    res.status(200).send({ isBooked: true, bookingId: booking._id });
  } catch (error) {}
});

//update booking

//booking details by booking id

//cancel booking
bookingrouter.delete("/booking", auth, (req, res) => {
  const user = User.find({ _id: req.session.user.userId });
  if (!user) {
    res.status(404).send({ Error: "Not authenticated." });
  }
  if (user.role !== "admin") {
    res.status(402).send({ Error: "User Not authorized." });
  }
  Bookings.delete({ _id: req.body.id });
  res.status(200).send("Booking cancelled successfully.");
});

module.exports = bookingrouter;
