const express = require('express');
const app = express();
const mongoose = require('mongoose');

const config = require('./configs');

const indexRoutes = require('./routes/index.routes');
const productRoutes = require('./routes/product.routes');

mongoose.connect(`${config.mongo.uri}${config.mongo.db}`)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err)
    );

app.use(express.json());

app.use('/', indexRoutes);
app.use('/products', productRoutes);

const port = config.port;

app.listen(port, () => console.log(`Start server at port ${port}`))

