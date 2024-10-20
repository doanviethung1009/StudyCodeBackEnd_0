// Get the client for callback
//const mysql = require('mysql2');
// get the client for promise
const mysql = require('mysql2/promise');
require('dotenv').config() // import dotenv



// Create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, //defaul: 3306
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD, // set your password here || defaul: empty
//     database: process.env.DB_NAME,
//   });

// Create the connection pool. The pool-specific settings are the defaults
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, //defaul: 3306
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, // set your password here || defaul: empty
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

module.exports = connection;