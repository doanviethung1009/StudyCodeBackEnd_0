const connection = require('../config/database');
const User = require('../models/Users');

const getAllUsers = async () => {
    // let [results, fields] = await connection.query('select * from Persons');
    // return results;

    //mongo:
    let listUsers = await User.find({});
    return listUsers;
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

const createUser = async (email, name, city) => {
    // let [results, fields] = await connection.query('INSERT INTO Persons(EMAIL,NAME,CITY) VALUES (?,?,?)',
    //     [email, name, city])

    // input data come into database mongo
    //method 1 default input:
    // const userData = new User({ email: email, name: name, city: city })
    //de-structuring method 1:
    // const userData = new User({ email, name, city })
    // userData.save();

    //mehtod 2:


    // User.create({
    //     email: email,
    //     name: name,
    //     city: city
    // })

    //method 2 de-structuring:
    // User.create({ email, name, city })

    // mehtod 3:
    new Promise(async (resolve, reject) => {
        try {
            if (!email || !name || !city) {
                throw new Error('Missing required parameters')
            }
            let results = User.create({ email, name, city });
            resolve(results)
        } catch (e) {
            reject(e)
        }

    })

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

const deleteUser = async (id) => {
    // console.log("check id ", id)
    let [results, fields] = await connection.query('DELETE FROM Persons where ID = ? ;', [id])
    return results
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createUser
}