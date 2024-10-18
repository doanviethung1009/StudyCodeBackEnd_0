// Get the client
const mysql = require('mysql2');
require('dotenv').config() // import dotenv



// Create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, //defaul: 3306
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, // set your password here || defaul: empty
    database: process.env.DB_NAME,
});


module.exports = connection;