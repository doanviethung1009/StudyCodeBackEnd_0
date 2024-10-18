const express = require('express')
const router = express.Router()


//req (request), res(response) là 2 object trong môi trường Node.js
router.get('/', (req, res) => {
    res.send('Hello World! test')
  })
  
router.get('/abc', (req, res) => {
      res.send('Hello World! abc')
    })
  
  //call route to run view 
router.get('/example', (req, res) => {
      res.render('sample.ejs')
    })

module.exports = router; // exprot router to use in app.js