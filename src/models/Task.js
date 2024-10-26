const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String,
});

const projectSchema = new mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    description: String,
});

const taskSchema = new mongoose.Schema({
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    status: { type: String, enum: ['not yet', 'processing', 'pending', 'completed'], default: 'not yet' },
    startDate: { type: String },
    endDate: { type: String },
    Customer: userSchema,
    projectInfor: projectSchema,
    usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // projectInfor: { typeof: mongoose.Schema.Types.ObjectId, ref: 'Project' },

}

)

taskSchema.plugin(mongoose_delete, { deletedAt: true, overrideMethods: 'all' });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;