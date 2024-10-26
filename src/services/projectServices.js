const User = require("../models/Users")
const Project = require("../models/Project")
const Task = require("../models/Task")
const aqp = require('api-query-params');


const createNewProject = (dataProject) => {
    // console.log('dataProject', dataProject)
    return new Promise(async (resolve, reject) => {
        try {
            //create new project
            if (dataProject.type === "EMPTY-PROJECT") {
                let newProject = await Project.create(dataProject)
                console.log("newProject", newProject)
                resolve({
                    errCode: 0,
                    errMessage: "Project has been created successfully",
                    data: newProject,
                })
            }
            // add user_id to projects
            else if (dataProject.type === "ADD-USERS") {
                //search project with projectID
                let newProject = await Project.findById(dataProject.projectID).exec();
                //Adding Subdocs to Arrays
                //check how many userArr input and push into schema
                for (let i = 0; i < dataProject.userArr.length; i++) {
                    //push userID into project.userInfor 
                    newProject.usersInfor.push(dataProject.userArr[i]);
                }
                //save (commit) data into database
                await newProject.save();
                console.log("newProject", newProject)
                resolve({
                    errCode: 0,
                    errMessage: "Project has been created successfully",
                    data: newProject,
                })
            }
            else resolve({
                errorCode: 3,
                errMessage: "Invalid project type",
            })

        } catch (err) {
            reject(err)
        }
    })
}

const createUserService = (dataUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let newUser = await User.create(dataUser)
            resolve({
                errCode: 0,
                errMessage: "User has been created successfully",
                data: newUser,
            })
        } catch (err) {
            reject(err)
        }
    })
}

const getProjectService = (queryString) => {

    return new Promise(async (resolve, reject) => {
        try {
            let page = +queryString.page;
            let limit = +queryString.limit;
            let populate1 = queryString.populate1;
            // let select = queryString.select;
            let { filter, skip, sort, projection, population } = aqp(queryString)
            delete filter.page

            let offset = (page - 1) * limit;
            let data = await Project.find(filter)
                // input ref with _id and choose fields to select and condition(match)
                .populate({ path: `${populate1}`, match: { role: "le" }, select: " -_id" })
                // input ref with _id and choose fields to select and condition(match)
                .populate({ path: "taskInfor", select: "-_id", populate: { path: "usersInfor", select: "-_id" } })
                //.populate(population)
                .skip(offset)
                .limit(limit)
                .exec();
            resolve({
                errCode: 0,
                errMessage: "Get project successfully",
                data: data,
            })
        } catch (e) {
            reject(e)
        }
    })
}

const createNewTask = (dataTask) => {
    console.log('dataTask', dataTask)
    console.log(">> cehck create ", dataTask.usersArr)
    //create new task mode
    return new Promise(async (resolve, reject) => {
        try {
            if (dataTask.type === "EMPTY-TASK") {
                let newTask = await Task.create(dataTask)
                resolve({
                    errCode: 0,
                    errMessage: "Task has been created successfully",
                    data: newTask,
                })
            }
            // add user_id to tasks

            else if (dataTask.type === "ADD-USERS") {
                console.log(">> cehck create ", dataTask.usersArr)
                let newTask = await Task.findById(dataTask.taskID).exec();
                console.log("check task ", newTask)
                for (let i = 0; i < dataTask.usersArr.length; i++) {
                    newTask.usersInfor.push(dataTask.usersArr[i]);
                    // console.log("check task ", dataTask.usersArr[i])
                }
                await newTask.save();
                resolve({
                    errCode: 0,
                    errMessage: "Task has been created successfully",
                    data: newTask,
                })
            }
            else resolve({
                errorCode: 3,
                errMessage: "Invalid project type",
            })


        } catch (err) {
            reject(err)
        }
    })
}

const getTaskService = (queryString) => {
    console.log('queryString', queryString)
    return new Promise(async (resolve, reject) => {
        try {
            let page = +queryString.page;
            let limit = +queryString.limit;
            let { filter, skip, sort, projection, population } = aqp(queryString)
            delete filter.page
            console.log(population)
            let offset = (page - 1) * limit;
            let data = await Task.find(filter)
                .populate('usersInfor')
                .skip(offset)
                .limit(limit)
                .exec();
            console.log("data", data)
            resolve({
                errCode: 0,
                errMessage: "Get task successfully",
                data: data,
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteTaskService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await Task.deleteById(id).exec()
            resolve({
                errCode: 0,
                errMessage: "Delete task successfully",
                data: result,
            })
        } catch (e) {
            reject(e)
        }
    })

}

module.exports = {
    createNewProject, createUserService, getProjectService, createNewTask, getTaskService, deleteTaskService,

    //service to update task
    updateTaskService: (data) => {
        // console.log("dataTask",)
        //create new task mode
        //return new Promise async await để đợi dữ liệu trả về thì mới thực hiện các hàm bên dướ
        return new Promise(async (resolve, reject) => {
            try {
                let newData = await Task.findByIdAndUpdate({ _id: data.id }, { name: data.name })
                resolve({
                    errCode: 0,
                    errMessage: "Update task successfully",

                })
            } catch (e) {
                reject(e)
            }
        })
    },



}