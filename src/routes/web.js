const express = require('express')
const { getHomepage, getAbc, getExample, postCreateUser, getCreatePage, getUpdatePage
    , postEditUser, postDeleteUser, postHandleDeleteUser } = require('../controllers/homeController')
const router = express.Router()


//req (request), res(response) là 2 object trong môi trường Node.js
// router.Method(/route, handler)

// router.get('/', (req, res) => {
//     res.send('Hello World! test')
//   })
router.get('/', getHomepage)

// router.get('/abc', (req, res) => {
//       res.send('Hello World! abc')
//     })
router.get('/abc', getAbc)

//call route to run view 
// router.get('/example', (req, res) => {
//       res.render('sample.ejs')
//     })
router.get('/example', getExample)

//create User

router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)
//update User with params
router.get('/edit/:id', getUpdatePage)
router.post('/edit-user', postEditUser)
//delete user 
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleDeleteUser)

module.exports = router; // export router to use in app.js 