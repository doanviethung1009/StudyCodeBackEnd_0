// Get the client for callback
//const mysql = require('mysql2');
// get the client for promise
// const mysql = require('mysql2/promise');
require('dotenv').config() // import dotenv
const mongoose = require('mongoose')


// Create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, //defaul: 3306
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD, // set your password here || defaul: empty
//     database: process.env.DB_NAME,
//   });

// Create the connection pool. The pool-specific settings are the defaults
// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT, //defaul: 3306
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD, // set your password here || defaul: empty
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//   maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//   idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//   queueLimit: 0,
//   enableKeepAlive: true,
//   keepAliveInitialDelay: 0,
// });

const dbState = [{
  value: 0,
  label: "disconnected"
},
{
  value: 1,
  label: "connected"
},
{
  value: 2,
  label: "connecting"
},
{
  value: 3,
  label: "disconnecting"
}];



const connection = async () => {

  try {
    await mongoose.connect('mongodb://root:123456@127.0.0.1:27018/');
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    // handleError(error);
    console.log("check error of database mongo", error)
  }
}

module.exports = connection;