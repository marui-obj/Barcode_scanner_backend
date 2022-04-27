const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = Schema({
    product_list: [{
        type: ObjectId,
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