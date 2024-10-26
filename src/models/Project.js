const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 255 },
},
    {
        _id: false,
    }
)

const userSchema = new mongoose.Schema({
    learderID: { type: String, maxLength: 255 },
    name: { type: String, maxLength: 255 },
    email: { type: String, maxLength: 255 },
},
    {
        _id: false,
    }
)

const projectSchema = new mongoose.Schema({
    type: { typeof: String },
    name: { type: String, maxLength: 255, required: true },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String, maxLength: 600 },
    leaderData: userSchema,
    LeaderInfor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    customerInfor: customerSchema,
    taskInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }, { _id: false }],
    usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
},
    {
        timestamps: true,
        type: false,
        // collection: 'test', // Đặt tên collection (hardcode schema) là 'test' 
    }
)


projectSchema.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;