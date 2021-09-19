const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const login_form = require("./route/login_form");
const seat_allocation = require("./route/seat_allocation");
const seatData = require("./route/seatData");

app.use("/login_form", login_form);
app.use("/seat_allocation", seat_allocation);
app.use("/seatData", seatData);

app.get("/", (req, res) => {
  res.send("church application backend!");
});

app.get("/", (req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const port = 8080;

app.listen(port, () => {
  console.log(`running on  http://localhost:${port}`);
});

// Access-Control-Allow-Origin: "*",
// 'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT"
// 'Access-Control-Max-Age': "1000",
// Header set Access-Control-Allow-Headers "x-requested-with, Content-Type, origin$/etc/apache2/apache2.conf