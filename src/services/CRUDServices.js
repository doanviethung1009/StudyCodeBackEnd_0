const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Persons');
    return results;
    console.log(">>> check data results ", results)
}

module.exports = {
    getAllUsers,
}