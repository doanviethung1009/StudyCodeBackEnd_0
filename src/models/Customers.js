const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


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
        timestamps: true,
        // add more function to model (static functions)
        statics: {
            findByStatic(_id) {
                return this.find({ name: new RegExp(_id, 'i') });
            },
        }
    } // auto create createdAt and updatedAt fields
);
// pluggin to soft delete (don't drop data, still only update variable false to validate actived)
// update variable delete and active hidden when select data
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;