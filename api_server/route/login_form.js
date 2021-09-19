const express = require("express");
const router = express.Router();
const readSql = require("../Config/readSql");

router.get("/", (req, res) => {
  res.send("Welcome to the login form");
});

router.get("/getLogin", (req, res) => {
  var query = `SELECT * FROM login_details`;
  readSql.query(query, (err, result, fields) => {
    if (err) res.status(400).json({ success: false, message: err.code });
    res.send({ success: true, message: "items showned!", result });
  });
});

router.post("/postLogin", (req, res) => {
  var queryOne = `INSERT INTO login_details (username,email, password, confirmPassword) VALUES ('${req.body.username}','${req.body.email}', '${req.body.password}','${req.body.confirmPassword}')`;
  readSql.query(queryOne, (err, result, fields) => {
    if (err) res.status(400).json({ success: false, message: err.code });
    res.send({ success: true, message: "items inserted!", result });
  });
});
router.post("/login", (req, res) => {
  var queryTwo = `SELECT * FROM login_details WHERE email='${req.body.email}' AND password='${req.body.password}'`;
  console.log(queryTwo);
  readSql.query(queryTwo, (err, result, fields) => {
    if (err) res.status(400).json({ success: false, message: err.code });
    console.log(result[0].login_id);
    res.send({ success: true, message: "items showned!", result, user: result[0].login_id});
  });
});
module.exports = router;
