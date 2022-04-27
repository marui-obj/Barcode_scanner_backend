const express = require('express');
const router = express.Router();


const showLog = (req, res, next) => {
    console.log(req);
    next();
}

// middleware root router
// router.use(showLog);
// 

router.get('/', (req, res) => {
    res.send("Hello from backend");
    res.end();
});

module.exports = router;