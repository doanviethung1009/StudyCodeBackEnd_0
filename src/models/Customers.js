const mongoose = require('mongoose');


// shape data:
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    {
        timestamps: true
    } // auto create createdAt and updatedAt fields
);


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;