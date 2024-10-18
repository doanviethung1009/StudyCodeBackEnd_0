require('dotenv').config() // import dotenv
const express = require('express') //import express
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')



const app = express() // tạo express application
const port = process.env.DB_PORT || 8888; // init port
const hostname =  process.env.DB_HOST // init hostname


// console.log('check env', process.env)


//config template ejs engine 
configViewEngine(app);





//khai báo routes
app.use('/', webRoutes)
// app.use('/v1', webRoutes)
// app.use('/v2', webRoutes)


//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
  console.log(`Example app listening on host ${hostname} port ${port}`)
})
