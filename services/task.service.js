const Task = require('../models/Task');

const getTaskList = async() => {
    try{
        return await Task.getTaskList();
    } catch(e) {
        throw new Error(e);
    }
}

module.exports = {
    getTaskList
}