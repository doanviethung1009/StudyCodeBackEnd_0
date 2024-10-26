require('dotenv').config() // import dotenv
const express = require('express') //import express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')
const apiRoutes = require('./routes/api')
const api2Routes = require('./routes/api2')
const fileUpload = require('express-fileupload');

//import lib for mongodb driver
const { MongoClient } = require('mongodb');




const app = express() // tạo express application
const port = process.env.BE_PORT || 8888; // init port
const hostname = process.env.BE_HOST // init hostname
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

// console.log('check env', process.env)

// config để upload file
app.use(fileUpload());

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
// routes for api
app.use('/v1/api', apiRoutes)
// routes for api
app.use('/v2/api', api2Routes)
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
      try {


        // <--! connection using mongoose !-->
        // await connection()

        // <--! connection using mongoose !-->



        // <--! connection using mongo driver !-->
        const user = 'root'
        const password = '123456'
        // Connection URL
        const uri = `mongodb://${user}:${password}@localhost:27018/?authSource=admin`;
        const client = new MongoClient(uri);

        // Database Name
        const dbName = 'hoidanit';

        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');

        // đã kết nối thành công thì mới chạy tiếp
        const db = client.db(dbName);

        // đọc dữ liệu từ collection table (model)
        const collection = db.collection('documents');

        // queries to database
        // await collection.insertOne({ "name": "test" })
        // await collection.insertOne({ "address": "hcm", email: "test@gmail.com" })
        // await collection.insertOne({ array: [1, 2, 3] })
        // let results = await collection.find({}).toArray()
        let results = await collection.find({ name: 'test' }).toArray() // add filter

        console.log('>>> check results', results) // results contains rows returned by server
        // the following code examples can be pasted here...








        // <--! connection using mongo driver !-->

        //run server trên port đã khởi tạo trước đấy
        //nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
        app.listen(port, hostname, () => {
          console.log(`Example app listening on host ${hostname} port ${port}`)
        })
      } catch (error) {
        console.log('>>> check error', error)
      }

    }
  )()


