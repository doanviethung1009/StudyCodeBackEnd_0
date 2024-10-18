
const express = require('express') //import express
const path = require('path') //import path
require('dotenv').config() // import dotenv



const app = express() // tạo express application
const port = process.env.DB_PORT || 8888; // init port
const hostname =  process.env.DB_HOST // init hostname


// console.log('check env', process.env)


//config template ejs engine 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

// congig static files: css, image, js
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root




//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
app.get('/', (req, res) => {
  res.send('Hello World! test')
})

app.get('/abc', (req, res) => {
    res.send('Hello World! abc')
  })

//call route to run view 
app.get('/example', (req, res) => {
    res.render('sample.ejs')
  })

//run server trên port đã khởi tạo trước đấy
//nạp các thông tin khai báo ở trên rồi chạy (ví dụ như nạp routes)
app.listen(port, hostname, () => {
  console.log(`Example app listening on host ${hostname} port ${port}`)
})
