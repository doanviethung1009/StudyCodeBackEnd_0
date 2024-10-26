//import lib for mongodb driver
const { MongoClient } = require('mongodb');

// arrow function
const Driver = async () => {
    const user = 'root'
    const password = '123456'


    try {

        // Connection URL
        const uri = `mongodb://${user}:${password}@localhost:27018/?authSource=admin`;
        const client = new MongoClient(uri);

        // Database Name
        const dbName = 'hoidanit';

        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');

        // đã kết nối thành công thì mới chạy tiếp
        const db = client.db(dbName);

        // đọc dữ liệu từ collection table (model)
        const collection = db.collection('documents');

        // queries to database
        // await collection.insertOne({ "name": "test" })

        // embedded insert new user 1:
        // await collection.insertOne({
        //   "name": "test",
        //   "age": 20,
        //   "address": {
        //     province: "HN",
        //     district: "Hoàn Kiếm"
        //   },
        //   email: "test@gmail.com"
        // })

        // embedded insert new user 2:

        await collection.insertOne({
            "name": "test",
            "age": 20,
            "address": [{
                province: "HN",
                district: "Hoàn Kiếm"
            },
            {
                province: "HCM",
                district: "Q1"
            },],
            email: "test@gmail.com"
        })

        // await collection.insertOne({ array: [1, 2, 3] })
        // let results = await collection.find({}).toArray()
        // let results = await collection.find({ name: 'test' }).toArray() // add filter

        // console.log('>>> check results', results) // results contains rows returned by server
        // the following code examples can be pasted here...
    } catch (error) {
        console.log('>>> check error', error)
    }

}

module.exports = Driver;