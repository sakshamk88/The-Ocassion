const express = require("express");
const Bookings = require("../models/bookings");

const bookingrouter = new express.Router();

//make a booking
bookingrouter.post("/book", async (req, res) => {
  const session = req.session;
  if (!session.user) {
    res.status(401).send("You are not authenticated.");
  }
  try {
    const newBooking = new Bookings(req.body);
    await newBooking.save();
    res.status(200).send("Booking Made");
  } catch (err) {
    res.status(500).send(err);
  }
});

//get all the bookings of a particular owner(admin)
bookingrouter.get("", async (req, res) => {
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
bookingrouter.post("/user", async (req, res) => {
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

module.exports = bookingrouter;
