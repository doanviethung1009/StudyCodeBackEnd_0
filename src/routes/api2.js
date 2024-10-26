const express = require('express')
const { postNewUploadMultiAPI } = require('../controllers/apiController')
const { postNewCustomerAPI, postListCustomerAPI } = require('../controllers/customerController')
const { postCreateNewProjectAPI, getProjectAPI,
    postCreateNewTaskAPI, getTaskAPI, putUpdateTaskAPI, deleteTaskAPI } = require("../controllers/projectController")
const { postCreateUserAPI } = require("../controllers/userController")

const router2API = express.Router()

router2API.post('/multi', postNewUploadMultiAPI)

router2API.post('/customer', postNewCustomerAPI)
router2API.post('/customers', postListCustomerAPI)
router2API.post('/project', postCreateNewProjectAPI)
router2API.post('/project', postCreateUserAPI)
router2API.get('/project', getProjectAPI)

//crud task
router2API.post('/task', postCreateNewTaskAPI)
router2API.get('/task', getTaskAPI)
router2API.put('/task', putUpdateTaskAPI)
router2API.delete('/task', deleteTaskAPI)

router2API.post('/user', postCreateUserAPI)


module.exports = router2API; 