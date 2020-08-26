const monthBookingData = [
  { weight: 50, isBooked: false, date: "1", booking: {} },
  { weight: 50, isBooked: false, date: "2", booking: {} },
  { weight: 50, isBooked: false, date: "3", booking: {} },
  { weight: 50, isBooked: false, date: "4", booking: {} },
  { weight: 50, isBooked: false, date: "5", booking: {} },
  { weight: 50, isBooked: false, date: "6", booking: {} },
  { weight: 50, isBooked: false, date: "7", booking: {} },
  { weight: 50, isBooked: false, date: "8", booking: {} },
  { weight: 50, isBooked: false, date: "9", booking: {} },
  { weight: 50, isBooked: false, date: "10", booking: {} },
  { weight: 50, isBooked: false, date: "11", booking: {} },
  { weight: 50, isBooked: false, date: "12", booking: {} },
  { weight: 50, isBooked: false, date: "13", booking: {} },
  { weight: 50, isBooked: false, date: "14", booking: {} },
  { weight: 50, isBooked: false, date: "15", booking: {} },
  { weight: 50, isBooked: false, date: "16", booking: {} },
  { weight: 50, isBooked: false, date: "17", booking: {} },
  { weight: 50, isBooked: false, date: "18", booking: {} },
  { weight: 50, isBooked: false, date: "19", booking: {} },
  { weight: 50, isBooked: false, date: "20", booking: {} },
  { weight: 50, isBooked: false, date: "21", booking: {} },
  { weight: 50, isBooked: false, date: "23", booking: {} },
  { weight: 50, isBooked: false, date: "24", booking: {} },
  { weight: 50, isBooked: false, date: "25", booking: {} },
  { weight: 50, isBooked: false, date: "26", booking: {} },
  { weight: 50, isBooked: false, date: "27", booking: {} },
  { weight: 50, isBooked: false, date: "28", booking: {} },
  { weight: 50, isBooked: false, date: "29", booking: {} },
  { weight: 50, isBooked: false, date: "30", booking: {} },
  { weight: 50, isBooked: false, date: "31", booking: {} },
];

const monthBefore = [
  { weight: 50, isBooked: false, date: "25", booking: {} },
  { weight: 50, isBooked: false, date: "26", booking: {} },
  { weight: 50, isBooked: false, date: "27", booking: {} },
  { weight: 50, isBooked: false, date: "28", booking: {} },
  { weight: 50, isBooked: false, date: "29", booking: {} },
  { weight: 50, isBooked: false, date: "30", booking: {} },
  { weight: 50, isBooked: false, date: "31", booking: {} },
];

const monthAfter = [
  { weight: 50, isBooked: false, date: "25", booking: {} },
  { weight: 50, isBooked: false, date: "26", booking: {} },
  { weight: 50, isBooked: false, date: "27", booking: {} },
  { weight: 50, isBooked: false, date: "28", booking: {} },
  { weight: 50, isBooked: false, date: "29", booking: {} },
  { weight: 50, isBooked: false, date: "30", booking: {} },
  { weight: 50, isBooked: false, date: "31", booking: {} },
];

const dateHandler = (month, year, monthBeforeData, monthAfterData) => {
  var noOfDays = new Date(year, month - 1, 0).getDate();
  var startDaybefore = noOfDays - 7;

  monthBeforeData.forEach((day) => {
    day.date = (startDaybefore += 1).toString();
  });

  var startDayAfter = 0;
  monthAfterData.forEach((day) => {
    day.date = (startDayAfter += 1).toString();
  });
};

module.exports = { monthBookingData, monthBefore, monthAfter, dateHandler };
