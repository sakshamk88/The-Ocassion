const express = require("express");
const Bookings = require("../models/bookings");
const Property = require("../models/property");
const auth = require("../middleware/auth");
const bookingrouter = new express.Router();

//make a booking
bookingrouter.post("", auth, async (req, res) => {
  if (
    !req.body.Booking_date ||
    !req.body.Ocassion ||
    !req.body.phone ||
    !req.body.Customer_Name
  ) {
    res.status(402).send({ Error: "Required data is missing." });
  }
  const owner = await Property.findById(req.session.propertyId).select("owner");
  //const ownerId = owner.owner;
  if (!owner.owner) {
    res.status(500).send({ Error: "No owner Registered." });
  }
  const bookingData = {
    propertyId: req.session.propertyId,
    date: req.body.Booking_date,
    client: req.session.user.userId,
    owner: owner.owner,
    customerName: req.body.Customer_Name,
    ocassion: req.body.Ocassion,
    phoneNo: req.body.phone,
  };
  const newBooking = new Bookings(bookingData);
  await newBooking.save();
  res.status(200).send({ bookingId: newBooking._id });
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
    const month = req.query.month;
    const year = req.query.year;
    const bookings = await allBookings.filter((booking) => {
      return (
        booking.date.getMonth() === month && booking.date.getYear() === year
      );
    });
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

// get client specific bookings( only those for that specific client )
// bookingrouter.post("/user", auth, async (req, res) => {
//   const session = req.session;

//   if (!session.user) {
//     res
//       .status(401)
//       .send("You are not authenticated. No valid session provided.");
//   }

//   try {
//     const currDate = new Date();
//     const userBookings = await Bookings.findAll({ client: req.body.userId });
//     const bookings = await userBookings.map((booking) => {
//       return booking.date >= currDate;
//     });
//     if (!bookings) {
//       throw new Error("Can't find any bookings for this user.");
//     }
//     res.status(200).send(bookings);
//   } catch (err) {
//     res.status(500).send({ error: err });
//   }
// });

//check if the date is booked
bookingrouter.get("/isbooked", auth, async (req, res) => {
  const propertyId = req.session.propertyId;
  const date = req.body.date.getDate();

  try {
    const booking = Bookings.find({ propertyId: propertyId });
    const isBooked = date === booking.date.getDate();
    if (!isBooked) {
      res.status(200).send({ isBooked: false });
    }
    //console.log(date, propertyId);
    res.status(200).send({ isBooked: true, bookingId: booking._id });
  } catch (error) {}
});

//update booking

//booking details by booking id
bookingrouter.get("/:bId", auth, async (req, res) => {
  if (!req.params.bId) {
    res.status(404).send({ Error: "No id found." });
  }
  try {
    const bookingDetails = await Bookings.findById(req.params.bId);
    if (!bookingDetails) {
      res.status(404).send({ Error: "No booking found with given id." });
    }
    res.status(200).send(bookingDetails);
  } catch (error) {
    res.status(500).send({ Error: "No booking found with given id." });
  }
});

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
