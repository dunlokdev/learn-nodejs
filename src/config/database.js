//! Import để sử dụng được biến env
require("dotenv").config();
const mysql = require("mysql2");

// connection with traditional, it will create a new connection
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, // do config database là '3307' --> mặc định khồng truyền là '3306'
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD, // default password: empty
//   database: process.env.DB_NAME,
// });

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // do config database là '3307' --> mặc định không truyền là '3306'
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // default password: empty
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
});

module.exports = connection;
