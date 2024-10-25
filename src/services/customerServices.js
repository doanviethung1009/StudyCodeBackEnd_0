const Customer = require("../models/Customers")


module.exports = {
    createNewCustomerService: (name, email, phone, address, description, image) => {
        return new Promise(async (resolve, reject) => {
            try {

                let newCustomer = await Customer.create({
                    name,
                    email,
                    phone,
                    address,
                    image,
                    description
                })
                // console.log(newCustomer)
                resolve({
                    errCode: 0,
                    errMessage: "OK",
                    data: newCustomer,
                })



            } catch (error) {
                reject(error)
            }
        })
    },

    //mongodb bulk insert
    createManyCustomersService: (data) => {
        // console.log(">> check data input from controller: ", data)
        return new Promise(async (resolve, reject) => {
            try {
                let customersArray = await Customer.insertMany(data)
                // console.log(customersArray)
                resolve({
                    errCode: 0,
                    errMessage: "users are inserted",
                    data: customersArray,
                })
            } catch (error) {
                reject(error)
                resolve({
                    errCode: 1,
                    errMessage: "users are not inserted",
                })
            }
        })
    },

    getAllDataCustomerService: () => {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await Customer.find({}).exec()
                resolve({
                    errCode: 0,
                    errMessage: "OK",
                    data: data,
                })
            } catch (e) {
                reject(e)
            }
        })
    },



    updateCustomerService: (_id, name, email, phone, address) => {
        return new Promise(async (resolve, reject) => {
            try {
                // console.log(">> check data input from controller: ", _id, name, email, phone, address)
                let customer = await Customer.findByIdAndUpdate({ _id }, { name, email, phone, address }).exec()
                resolve({
                    errCode: 0,
                    errMessage: "OK",
                })
            } catch (error) {
                reject(error)
            }

        })
    },

    deleteACustomerService: (_id) => {
        console.log(">>> check _id", _id)
        return new Promise(async (resolve, reject) => {
            try {
                await Customer.deleteById({ _id }).exec()
                resolve({
                    errCode: 0,
                    errMessage: "OK",
                })
            } catch (error) {
                reject(error)
            }
        })
    }

}