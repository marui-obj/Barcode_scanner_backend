const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./configs');

const indexRoutes = require('./routes/index.routes');
const productRoutes = require('./routes/product.routes');
const taskRoutes = require('./routes/task.routes');

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
}

mongoose.connect(`${config.mongo.uri}${config.mongo.db}`)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err)
    );

app.use(cors(corsOption));

app.use(express.json());

app.use('/', indexRoutes);
app.use('/products', productRoutes);
app.use('/tasks', taskRoutes);

const port = config.port;

app.listen(port, () => console.log(`Start server at port ${port}`))

