const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/task.controller')

router.get('/', TaskController.getTaskList);

router.get('/:id', TaskController.getTaskDetail);

router.put('/:id', TaskController.putDispatchTask); //product id

module.exports = router