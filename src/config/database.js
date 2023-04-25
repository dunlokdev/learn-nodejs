//! Import để sử dụng được biến env
require("dotenv").config();
const mysql = require("mysql2");

// connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // do config database là '3307' --> mặc định khồng truyền là '3306'
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // default password: empty
  database: process.env.DB_NAME,
});

module.exports = connection;
