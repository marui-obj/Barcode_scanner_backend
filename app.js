const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./configs');

const indexRoutes = require('./routes/index.routes');
const productRoutes = require('./routes/product.routes');
const taskRoutes = require('./routes/task.routes');


mongoose.connect(`${config.mongo.uri}${config.mongo.db}`)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err)
    );

if (process.env.NODE_ENV !== 'test_deploy'){
    const corsOption = {
        origin: 'http://localhost:3000',
        credentials: true
    }
    app.use(cors(corsOption));
}


app.use(express.json());

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/tasks', taskRoutes);

const port = process.env.PORT || config.port;

app.listen(port, () => console.log(`Start server at port ${port}`))

