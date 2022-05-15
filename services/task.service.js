const Task = require('../models/Task');
const Product = require('../models/Product');

const getTaskList = async() => {
    try{
        return await Task.getTaskList();
    } catch(e) {
        throw new Error(e);
    }
}

const getTaskDetail = async(id) => {
    try{
        return await Task.getTaskDetail(id);
    } catch(e) {
        throw new Error(e);
    }
}

const setProductDispatchAndRemoveInTask = async(id) => {
    try{
        const task = await Task.findTaskFromProduct(id);
        const update = {
            status: "dispatched",
            location: null,
            dispatched_date: Date.now()
        }
        await Product.updateProduct(id, update)

        const is_compleate = await isTaskCompleate(task);
        if(is_compleate){
            const update = {
                task_status: "Completed",
                finished_date: Date.now(),
            }
            return await Task.updateTask(task.id, update);
        } else {
            return 
        }
    } catch(e) {
        throw new Error(e);
    }
}

const isTaskCompleate = async(task) => {
    var promise_arr = []
    task.product_list.forEach( async(product_id) => {
        promise_arr.push(isProductDispatch(product_id))
    })

    const result = await Promise.all(promise_arr);
    return result.every(v => v === true)? true : false
    
}

const isProductDispatch = async(id) => {
    try{
        const result = await Product.getProduct(id)
        return result.status === 'dispatched'? true : false
    } catch(e) {
        throw new Error(e)
    }
}


module.exports = {
    getTaskList,
    getTaskDetail,
    setProductDispatchAndRemoveInTask
}