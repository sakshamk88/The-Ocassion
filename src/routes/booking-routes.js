const express = require("express");
const Bookings = require("../models/bookings");
const Property = require("../models/property");
const auth = require("../middleware/auth");
const moment = require("moment");
const bookingrouter = new express.Router();
const {
  monthBookingData,
  monthBefore,
  monthAfter,
  dateHandler,
} = require("../models/months");

//make a booking
bookingrouter.post("", auth, async (req, res) => {
  if (
    !req.body.Booking_date ||
    !req.body.Occasion ||
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
  const fdate = moment(req.body.Booking_date.split("T")[0]).format(
    "YYYY-MM-DD"
  );

  const booking = await Bookings.findOne({
    propertyId: req.session.propertyId,
    date: fdate,
  });

  if (booking) {
    res.status(200).send({ isBooked: true, bookingId: booking._id });
    return;
  }
  const bookingData = {
    propertyId: req.session.propertyId,
    date: fdate,
    client: req.session.user.userId,
    owner: owner.owner,
    customerName: req.body.Customer_Name,
    ocassion: req.body.Occasion,
    phoneNo: req.body.phone,
    status: req.body.status,
  };
  const newBooking = new Bookings(bookingData);

  await newBooking.save();
  res.status(200).send({ bookingId: newBooking._id });
});

//get all the bookings of a particular owner(admin) in a month
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
    const allBookings = await Bookings.find({ owner: session.user.userId });
    const month = req.query.month;
    const year = req.query.year;
    const bookings = await allBookings.filter((booking) => {
      return (
        (booking.date.getMonth() + 1).toString() == month &&
        booking.date.getFullYear().toString() == year
      );
    });
    await monthBookingData.forEach(async (booking) => {
      const isBook = await bookings.filter((book) => {
        // console.log(
        //   typeof booking.date +
        //     " ----- " +
        //     typeof book.date.getDate().toString()
        // );
        return booking.date == book.date.getDate().toString();
      });
      booking.month = month;
      if (isBook.length) {
        booking.isBooked = true;

        booking.booking = isBook[0];
      }

      return booking;
    });

    //7 days before and after current month
    dateHandler(month, year, monthBefore, monthAfter);

    //calculating before month booking
    var monBefore = month;
    var beforeMonthBooking = await allBookings.filter((booking) => {
      return (
        (booking.date.getMonth() + 1).toString() ===
          (monBefore - 1).toString() &&
        booking.date.getFullYear().toString() === year
      );
    });
    await monthBefore.forEach(async (booking) => {
      const isBook = await beforeMonthBooking.filter((book) => {
        return booking.date === book.date.getDate().toString();
      });
      booking.month =
        monBefore == 1 ? "12" : (parseInt(monBefore) - 1).toString();
      if (isBook.length) {
        booking.isBooked = true;

        booking.booking = isBook[0];
      }

      return booking;
    });

    //calculating after month booking
    var monAfter = parseInt(month);

    var afterMonthBooking = await allBookings.filter((booking) => {
      return (
        (booking.date.getMonth() + 1).toString() ===
          (monAfter == 12 ? 1 : monAfter + 1).toString() &&
        booking.date.getFullYear().toString() === year
      );
    });
    await monthAfter.forEach(async (booking) => {
      const isBook = await afterMonthBooking.filter((book) => {
        return booking.date === book.date.getDate().toString();
      });
      booking.month = monAfter == 12 ? "1" : (monAfter + 1).toString();
      if (isBook.length) {
        booking.isBooked = true;

        booking.booking = isBook[0];
      }

      return booking;
    });
    //statistics calculations
    const noOfBookings = bookings.length;
    const cancelledBookings = allBookings.filter((booking) => {
      return booking.status === "Cancelled";
    });
    const statsData = {
      booked: noOfBookings,
      available: new Date(year, month, 0).getDate() - noOfBookings,
      cancelled: cancelledBookings.length,
    };

    res.status(200).send({
      bookings: monthBookingData,
      stats: statsData,
      monthBefore: monthBefore,
      monthAfter: monthAfter,
    });
  } catch (err) {
    res.status(500).send({ Error: err });
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
  const date = [req.query.year, req.query.month, req.query.day].join("-");
  const fdate = new Date(date);
  try {
    const booking = await Bookings.findOne({
      propertyId: propertyId,
      date: fdate,
    });

    if (!booking) {
      res.status(200).send({ isBooked: false });
      return;
    }
    //console.log(date, propertyId);

    res.status(200).send({ isBooked: true, bookingId: booking._id });
  } catch (error) {
    res.status(500).send({ Error: "something went wrong." });
  }
});

//update booking
bookingrouter.put("/:bId", auth, async (req, res) => {
  // try {
  const udate = moment(req.body.Booking_date.split("T")[0]).format(
    "YYYY-MM-DD "
  );
  const owner = await Property.findById(req.session.propertyId);
  const updatedData = {
    propertyId: req.session.propertyId._id,
    date: udate,
    client: req.session.user.userId,
    owner: owner.owner,
    customerName: req.body.Customer_Name,
    ocassion: req.body.Occasion,
    phoneNo: req.body.phone,
  };
  await Bookings.findByIdAndUpdate(req.params.bId, updatedData);
  res.status(200).send(updatedData);
  // } catch (error) {
  //   res.status(500).send({ Error: error });
  //}
});

//booking details by booking id
bookingrouter.get("/:bId", auth, async (req, res) => {
  if (!req.params.bId) {
    res.status(404).send({ Error: "No id found." });
    return;
  }
  try {
    const bookingDetails = await Bookings.findById(req.params.bId);
    if (!bookingDetails) {
      res.status(404).send({ Error: "No booking found with given id." });
      return;
    }
    res.status(200).send(bookingDetails);
  } catch (error) {
    res.status(500).send({ Error: "No booking found with given id." });
  }
});

//cancel booking
bookingrouter.delete("/booking", auth, (req, res) => {
  if (req.session.user.role !== "admin") {
    res.status(402).send({ Error: "User Not authorized." });
  }
  Bookings.delete({ _id: req.body.id });
  res.status(200).send("Booking cancelled successfully.");
});

module.exports = bookingrouter;
