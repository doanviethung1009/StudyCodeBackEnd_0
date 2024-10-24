const { createNewCustomerService, createManyCustomersService, getAllDataCustomerService } = require("../services/customerServices");
const { uploadSingleFileService } = require("../services/fileService2")


// {key: value, key2: value2}
module.exports = {
    postNewCustomerAPI: async (req, res) => {
        let { name, email, phone, address, description } = req.body;
        // console.log(">> check body: ", req.body);
        let imageName = ""
        try {
            if (!name || !email || !phone || !address || !description) {
                res.status(200).json({ error: "Missing required parameters" })
            } else {
                if (!req.files || Object.keys(req.files).length === 0) {
                    //do nothing
                } else {
                    let result = await uploadSingleFileService(req.files.image, "avatar");
                    console.log(">> check result: ", result.data);
                    imageName = result.data.name;
                }
            }
            let message = await createNewCustomerService(name, email, phone, address, description, imageName);
            return res.status(200).json({
                message
            })
        } catch (e) {
            console.log(e)
            return res.status(200).json({
                errMessage: "error from server",
                errCode: -1,
            })
        }
        // return res.send("test post new customer");
    },

    postListCustomerAPI: async (req, res) => {
        // console.log(req.body.customer)
        let dataArray = []
        try {
            if (req.body || req.body.length > 0) {
                dataArray = req.body.customer;
            } else {
                return res.status(200).json({
                    errCode: -2,
                    errMessage: "missing required parameters"
                })
            }
            let message = await createManyCustomersService(dataArray)
            return res.status(200).json({ message })

        } catch (e) {
            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
                data: [],
                error: JSON.stringify(e)
            })
        }
        // return res.send("test post list customer");
    },

    getAllDataCustomerAPI: async (req, res) => {
        //get all data customer
        try {
            let message = await getAllDataCustomerService();
            return res.status(200).json({
                message
            })
        } catch (e) {
            console.log(e)
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from server",
                data: [],
                error: JSON.stringify(e)
            })
        }
        return res.send("test get all data customer");


    }


}