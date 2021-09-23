const express = require("express");
const router = express.Router();
// const readSql = require("../Config/readSql");

router.get("/", (req, res) => {
  res.send([
    {
      seatNumber: "A1",
      price: "£19.99",
      available: true,
      disabilityAccessible: true,
    },
    {
      seatNumber: "A2",
      price: "£19.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "A3",
      price: "£19.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "A4",
      price: "£19.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "A5",
      price: "£19.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "B1",
      price: "£12.99",
      available: true,
      disabilityAccessible: true,
    },
    {
      seatNumber: "B2",
      price: "£12.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "B3",
      price: "£12.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "B4",
      price: "£12.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "B5",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "C1",
      price: "£12.99",
      available: true,
      disabilityAccessible: true,
    },
    {
      seatNumber: "C2",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "C3",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "C4",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "C5",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "D1",
      price: "£12.99",
      available: true,
      disabilityAccessible: true,
    },
    {
      seatNumber: "D2",
      price: "£12.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "D3",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "D4",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "D5",
      price: "£12.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "E1",
      price: "£8.99",
      available: true,
      disabilityAccessible: true,
    },
    {
      seatNumber: "E2",
      price: "£8.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "E3",
      price: "£8.99",
      available: false,
      disabilityAccessible: false,
    },
    {
      seatNumber: "E4",
      price: "£8.99",
      available: true,
      disabilityAccessible: false,
    },
    {
      seatNumber: "E5",
      price: "£8.99",
      available: true,
      disabilityAccessible: false,
    },
  ]);
});
module.exports = router;
