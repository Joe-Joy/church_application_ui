const express = require("express");
const router = express.Router();
// const readSql = require("../Config/readSql");

// Generating Default Dummy Data
const ChurchSeat = [];
for (let i = 0; i < 10; i++) {
  let SeatChar, SeatPrice;
  if (i === 0) SeatChar = "A";
  else if (i === 1) SeatChar = "B";
  else if (i === 2) SeatChar = "C";
  else if (i === 3) SeatChar = "D";
  else if (i === 4) SeatChar = "E";
  else if (i === 5) SeatChar = "F";
  else if (i === 6) SeatChar = "G";
  else if (i === 7) SeatChar = "H";
  else if (i === 8) SeatChar = "I";
  else if (i === 9) SeatChar = "J";
  if (i === 0 || i === 1 || i === 2 || i === 3 || i === 4) SeatPrice = 90.99;
  else SeatPrice = 120.99;
  for (let j = 0; j < 12; j++) {
    ChurchSeat.push({
      seatNumber: SeatChar + (j + 1),
      price: SeatPrice,
      available: true,
      disabilityAccessible: true,
    });
  }
}

router.get("/seatData", (req, res) => {
  res.status(200).json(ChurchSeat);
});

router.post("/bookSeat", (req, res) => {
  let Price = 0;
  console.log("booking was going on");

  for (let j = 0; j < req.body.seats.length; j++) {
    console.log(req.body.seats);
    for (let i = 0; i < ChurchSeat.length; i++) {
      if (ChurchSeat[i].seatNumber === req.body.seats[j]) {
        ChurchSeat[i].available = false;
        Price = Price + parseFloat(ChurchSeat[i].price);
        break;
      }
    }
  }
  res.status(200).json({ msg: "success" });
});

router.get("/invoice", (req, res) => {
  let Price = 0;
  const TotalSeat = [];
  for (let i = 0; i < ChurchSeat.length; i++) {
    if (ChurchSeat[i].available === false) {
      TotalSeat.push(ChurchSeat[i].seatNumber);
      Price = Price + parseFloat(ChurchSeat[i].price);
    }
  }
  res.status(200).json({
    Seats: TotalSeat,
    totalSeats: TotalSeat.length,
    totalPrice: Price,
  });
});
module.exports = router;
