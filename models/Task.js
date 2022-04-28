const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = Schema({
    product_list: [{
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    task_status: {
        type: String,
        enum: ['Pending', 'Completed'],
        default: 'Pending'
    },
    due_date: Date,
    finished_date: {
        type: Date,
        default: null
    },
    driver_name: String,
    license_plate: String
});

const Task = mongoose.model('Task', TaskSchema);

const getTaskList = async() => {
    // Return task that have Pending status
    return await Task.find({})
    .where("task_status").equals("Pending")
    .populate({path: 'product_list'});
}

module.exports = {
    getTaskList
}