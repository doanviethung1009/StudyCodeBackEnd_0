const Customer = require("../models/Customers")
const aqp = require('api-query-params');


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

    getAllDataCustomerService: (page, limit, queriesString) => {
        console.log(`>> check page: ${page} and limit: ${limit}`)
        return new Promise(async (resolve, reject) => {
            try {
                let data = null;
                // queries builder for filter, sort, pagination... etc
                let { filter } = aqp(queriesString);
                // delete var page in filter
                delete filter.page;

                console.log(">> check filter: ", filter)
                //calculate skip (pagination)
                if (page || limit) {
                    //offset is item which will be skipped in array
                    //math in code first * / after + - 
                    let offset = (page - 1) * limit;
                    //=> example: let offset = (page * limit) - limit;
                    console.log(">> check offset (skip): ", offset)
                    data = await Customer.find(filter).skip(offset).limit(limit).sort({ name: 'asc' }).exec()
                    // let offset = page * limit;
                    // if (name) {
                    //     data = await Customer.find({ 'name': { '$regex': '.*' + name + '*.' } }).skip(offset).limit(limit).sort({ name: 'asc' }).exec()
                    // } else {
                    //     data = await Customer.find({}).skip(offset).limit(limit).sort({ name: 'asc' }).exec()
                    // }

                } else data = await Customer.find({}).exec()

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
                // use method static function of model in mongoose
                let test = await Customer.findByStatic(_id)
                console.log(">>> check test: ", test)
                await Customer.deleteById({ _id }).exec()
                resolve({
                    errCode: 0,
                    errMessage: "OK",
                })
            } catch (error) {
                reject(error)
            }
        })
    },

    deleteBulkDataService: (ids) => {
        // console.log(">>> check data: ", ids)
        return new Promise(async (resolve, reject) => {
            try {
                // console.log(">>> check data: ", data)
                let data = await Customer.delete({ _id: { $in: ids } })
                resolve({
                    errCode: 0,
                    errMessage: "OK",
                    data: data
                })
            } catch (error) {
                reject(error)
            }
        })
    }

}