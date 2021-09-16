const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const login_form = require("./route/login_form");
const seat_allocation = require("./route/seat_allocation");
// const seatData = require("./route/seatData");

app.use("/login_form", login_form);
app.use("/seat_allocation", seat_allocation);
// app.use("/seatData", seatData);

app.get("/", (req, res) => {
  res.send("church application backend!");
});

const port = 8080;

app.listen(port, () => {
  console.log(`running on  http://localhost:${port}`);
});

