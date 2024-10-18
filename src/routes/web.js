const express = require('express')
const {getHomepage, getAbc, getExample} =  require('../controllers/homeController')
const router = express.Router()


//req (request), res(response) là 2 object trong môi trường Node.js
// router.Method(/route, handler)

// router.get('/', (req, res) => {
//     res.send('Hello World! test')
//   })
router.get('/',getHomepage)  

// router.get('/abc', (req, res) => {
//       res.send('Hello World! abc')
//     })
router.get('/abc', getAbc)
  
  //call route to run view 
// router.get('/example', (req, res) => {
//       res.render('sample.ejs')
//     })
router.get('/example',getExample)

module.exports = router; // exprot router to use in app.js