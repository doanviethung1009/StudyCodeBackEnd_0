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

const updateUser = async (id, email, name, city) => {
    // console.log("id ", id, " email ", email, "name", name, "city", city);
    let [results, fields] = await connection.query(`UPDATE Persons 
                              set NAME = ?
                              , CITY = ?
                              WHERE ID = ? ;`, [name, city, id])
    // console.log(">>> check data input: ", results)
    // res.send(`Update user success ${email} with ${name} , ${city}`)
    return results;
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
}