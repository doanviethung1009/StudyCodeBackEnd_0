const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Persons');
    return results;
}

module.exports = {
    getAllUsers,
}