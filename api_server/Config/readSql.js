const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  password: ".",
  database: "church_application",
  dateStrings: true,
  debug: false,
};

var readConnection = mysql.createPool(config);
module.exports = readConnection;