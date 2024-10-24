
const { getUsersService, createUserService, updateUserService, deleteUserService } = require('../services/apiServices')
const { uploadSingleFileService, uploadMultipleFilesService } = require("../services/fileServices")
const { uploadNewMultipleFilesService } = require("../services/fileService2")


const getUsers = async (req, res) => {
    try {
        let message = await getUsersService();
        res.status(200).json({
            errCode: 0,
            data: message
        })
    } catch (e) {
        res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
    // let users = await getUsersService();
}

const createUser = async (req, res) => {
    try {
        let { email, name, city } = req.body;
        if (!email || !name || !city) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters'
            })
        }
        let message = await createUserService(req.body);
        // console.log(' >>> check user', message)
        return res.status(200).json({ message })

    } catch (e) {
        let err = console.log(e)
        res.status(200).json({
            err: err,
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


const editUserAPI = async (req, res) => {

    try {
        let { email, name, city } = req.body;
        if (!email || !name || !city) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters'
            })
        }
        let message = await updateUserService(req.body);
        return res.status(200).json({ message })
    } catch (e) {
        res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

const deleteUserAPI = async (req, res) => {
    try {
        let message = await deleteUserService(req.body._id)
        return res.status(200).json({ message })
    } catch (e) {
        res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

const postUploadFileAPI = async (req, res) => {
    // res.send('test')
    try {
        // res.send('test success')
        // console.log(">> check req.files", req.files)
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(500).send('No files were uploaded.');
        } else {
            let message = await uploadSingleFileService(req.files.image);
            return res.status(200).json({ message })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }

}

const postUploadMultiAPI = async (req, res) => {
    // res.send('abc')
    // console.log(">> check req.files", req.files.image)
    try {
        // res.send('test success')
        // console.log(">> check req.files", req.files)
        if (!req.files || Object.keys(req.files.image).length === 0) {
            return res.status(500).send('No files were uploaded.');
        } else {
            let message = await uploadMultipleFilesService(req.files.image);
            return res.status(200).json({ message })

        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

const postNewUploadMultiAPI = async (req, res) => {
    // res.send('abc')
    // console.log(">> check req.files", req.files.image)
    try {
        // res.send('test success')
        // console.log(">> check req.files", req.files)
        if (!req.files || Object.keys(req.files.image).length === 0) {
            return res.status(500).send('No files were uploaded.');
        } else {
            let message = await uploadNewMultipleFilesService(req.files.image);
            return res.status(200).json({ message })

        }
    } catch (e) {
        console.log(e)
        res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = { getUsers, createUser, editUserAPI, deleteUserAPI, postUploadFileAPI, postUploadMultiAPI, postNewUploadMultiAPI }