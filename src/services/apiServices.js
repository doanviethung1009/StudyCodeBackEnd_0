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

module.exports = { getUsersService }