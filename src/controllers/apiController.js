const connection = require('../config/database')
const { getUsersService } = require('../services/apiServices')

const getUsers = async (req, res) => {
    try {
        let users = await getUsersService();
        res.status(200).json({
            errCode: 0,
            data: users
        })
    } catch (e) {
        res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
    let users = await getUsersService();
}

module.exports = { getUsers }