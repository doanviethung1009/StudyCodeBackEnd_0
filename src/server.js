require('dotenv').config() // import dotenv
const express = require('express') //import express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/api')




const app = express() // tạo express application
const port = process.env.BE_PORT || 8888; // init port
const hostname = process.env.BE_HOST // init hostname
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// console.log('check env', process.env)


//config template ejs engine 
configViewEngine(app);

//test connection

// A simple SELECT query
// connection.query(
//   'SELECT * FROM USERS',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     //console.log(fields); // fields contains extra meta data about results, if available
//   }
// );



//khai báo routes
app.use('/', webRoutes)
app.use('/v1/api', apiRoutes)
  // app.use('/v1', webRoutes)
  // app.use('/v2', webRoutes)


  //declare variable to call models and save data 
  // const silenceData = new Kitten({ name: 'Silence' });
  // silenceData.save();
  // const dogData = new dog({ name: 'abc' });
  // dogData.save();


  //validate connection and start application node js for be
  //js self function 
  ; (
    // arrow function
    async () => {
      //test connection
      await connection()
      //run server trên port đã khởi tạo trước đấy
      //nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
      app.listen(port, hostname, () => {
        console.log(`Example app listening on host ${hostname} port ${port}`)
      })
    }
  )()


