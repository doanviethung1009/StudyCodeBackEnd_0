const express = require('express')
const { getUsers, createUser, editUserAPI,
    deleteUserAPI, postUploadFileAPI, postUploadMultiAPI } = require('../controllers/apiController')

const { postNewCustomerAPI, postListCustomerAPI, getAllDataCustomerAPI } = require("../controllers/customerController")

const routerAPI = express.Router()



routerAPI.get('/', (req, res) => {
    try {
        res.send('Hello World!')
    } catch (err) {
        {
            err.statCode = 404;
            err.message = 'Error from server';
        }
    }
}
)

routerAPI.get('/abc', (req, res) => {
    try {
        // res.send('Hello World! abc')
        res.status(200).json({
            data: 'hello world'
        })
    } catch (err) {
        {
            err.status(404).json({
                message: 'Error from server'
            })
        }
    }
}
)

// api for user
routerAPI.get('/user', getUsers)
routerAPI.post('/user', createUser)
routerAPI.put('/user', editUserAPI)
routerAPI.delete('/user', deleteUserAPI)

// api for customer
routerAPI.get('/customer', getAllDataCustomerAPI)
routerAPI.post('/customer', postNewCustomerAPI)
routerAPI.post('/customerdata', postListCustomerAPI)



routerAPI.post('/file', postUploadFileAPI)
routerAPI.post('/multi', postUploadMultiAPI)

module.exports = routerAPI; // export router to use in app.js 