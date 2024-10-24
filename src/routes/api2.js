const express = require('express')
const { postNewUploadMultiAPI } = require('../controllers/apiController')
const router2API = express.Router()

router2API.post('/multi', postNewUploadMultiAPI)

module.exports = router2API; 