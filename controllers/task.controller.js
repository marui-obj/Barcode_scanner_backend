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

const getTaskDetail = async(req, res, next) => {
    const { id } = req.params;
    try{
        const result = await taskService.getTaskDetail(id);
        res.status(200).send(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500) && next(e);
    }
}

const putDispatchTask = async(req, res, next) => {
    const { id } = req.params
    try{
        const result = await taskService.setProductDispatchAndRemoveInTask(id);
        res.status(200).send(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500) && next(e);
    }
}

module.exports = {
    getTaskList,
    getTaskDetail,
    putDispatchTask
}