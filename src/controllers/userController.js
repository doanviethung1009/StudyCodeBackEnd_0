const { createUserService } = require("../services/projectServices")

const postCreateUserAPI = async (req, res) => {
    try {
        let message = await createUserService(req.body)
        return res.status(200).json({ message })
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: "Error from server",
            error: JSON.stringify(e)
        })
    }

}

module.exports = { postCreateUserAPI }