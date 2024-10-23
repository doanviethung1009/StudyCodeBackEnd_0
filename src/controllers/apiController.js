
const { getUsersService, createUserService } = require('../services/apiServices')

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
    // let users = await getUsersService();
}

const createUser = async (req, res) => {
    try {
        let { email, name, city } = req.body;
        if (!email || !name || !city) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Missing required parameters'
            })
        }
        let message = await createUserService(req.body);
        // console.log(' >>> check user', message)
        return res.status(200).json({ message })

    } catch (e) {
        let err = console.log(e)
        res.status(200).json({
            err: err,
            errCode: -1,
            errMessage: 'Error from server'
        })
    }

}

module.exports = { getUsers, createUser }