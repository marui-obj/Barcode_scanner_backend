const taskService = require('../services/task.service');

const getTaskList = async(req, res, next) => {
    // Get all task list where Pending status
    try{
        const result = await taskService.getTaskList();
        res.status(200).send(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500) && next(e);
    }
}

module.exports = {
    getTaskList
}