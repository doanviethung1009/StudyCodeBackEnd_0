const { createNewProject, getProjectService, createNewTask, getTaskService, updateTaskService, deleteTaskService } = require("../services/projectServices")



const postCreateNewProjectAPI = async (req, res) => {
    console.log(">> check req.query", req.body)
    // console.log("req.body", req.body)
    try {
        let message = await createNewProject(req.body)
        return res.status(200).json(message)
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server",
            error: JSON.stringify(e)
        })
    }
}

const getProjectAPI = async (req, res) => {
    try {
        let message = await getProjectService(req.query)
        return res.status(200).json(message)

    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server",
            error: JSON.stringify(e)
        })
    }
}

const postCreateNewTaskAPI = async (req, res) => {
    try {
        let message = await createNewTask(req.body)
        return res.status(200).json(message)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server",
            error: JSON.stringify(e)
        })
    }
}

const getTaskAPI = async (req, res) => {
    try {
        let message = await getTaskService(req.query)
        return res.status(200).json(message)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server",
            error: JSON.stringify(e)
        })
    }
}

const putUpdateTaskAPI = async (req, res) => {
    try {
        let { _id, name } = req.body
        let message = await updateTaskService(req.body)
        return res.status(200).json(message)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server",
            error: JSON.stringify(e)
        })
    }
}

const deleteTaskAPI = async (req, res) => {
    try {
        let message = await deleteTaskService(req.body)
        return res.status(200).json(message)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server",
            error: JSON.stringify(e)
        })
    }
}

module.exports = {
    postCreateNewProjectAPI, getProjectAPI, postCreateNewTaskAPI, getTaskAPI, putUpdateTaskAPI, deleteTaskAPI
}

