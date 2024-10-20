const connection = require('../config/database')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Persons');
    return results;
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query('SELECT * FROM Persons WHERE ID = ?', [id])
    if (results && results.length > 0) {
        let user = results[0]
        return user;
    } else {
        { }
    }

}

module.exports = {
    getAllUsers,
    getUserById,
}