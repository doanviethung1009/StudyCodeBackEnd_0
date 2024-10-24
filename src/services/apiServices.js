// import connection from "../config/database"
const User = require("../models/Users")


const getUsersService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            // connection.query("SELECT * FROM users", (err, result) => {
            //     if (err) {
            //         reject(err)
            //     }
            //     else {
            //         resolve(result)
            //     }
            // })

            let users = await User.find().exec()

            resolve(users)
        }
        catch (err) {
            reject(err) // Reject the promise with the error
        }
    }
    )
}


const createUserService = (user) => {
    return new Promise(async (resolve, reject) => {
        // method 1: 	try...catch: Used mainly for synchronous code but can handle asynchronous operations when used with async/await.
        try {
            let newUser = await User.create(user)
            resolve({
                errCode: 0,
                data: newUser,
                errMessage: "Create user successfully"
            })
        }
        catch (err) {
            reject(err) // Reject the promise with the error
        }


        //method 2:	•	.then().catch(): Directly used for Promises, which handle asynchronous operations.

        // User.create(user)
        //     .then(result => {
        //         console.log(result);  // Handle the result
        //         resolve({
        //             errCode: 0,
        //             data: result,
        //             errMessage: "Create user successfully"
        //         })
        //     })
        //     .catch(error => {
        //         console.error(error);  // Handle any errors
        //         reject(error);// Reject the promise with the error
        //     });
    })
}

const updateUserService = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let userUpdate = await User.updateOne(user._id, user, { new: true })
            let userUpdate = await User.findByIdAndUpdate(user._id, user, { new: true })
            resolve({
                errCode: 0,
                data: userUpdate,
                errMessage: "Update user successfully"
            })
        }
        catch (err) {
            reject(err) // Reject the promise with the error
        }
    })
}
module.exports = { getUsersService, createUserService, updateUserService }