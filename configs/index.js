var env = process.env.NODE_ENV || 'development';

var config = require('./config.'+env);

console.log(`Load config file at ${'./config.'+env}`)

console.log(`config.env ${config.env}`);

console.log(`config.hostname ${config.hostname}`);

console.log(`config.port ${config.port}`);

console.log(`config.mongo.uri ${config.mongo.uri}`);

console.log(`config.mongo.db ${config.mongo.db}`);

// config.env = 'development';
// config.hostname = '127.0.0.1';
// config.port = 8000;

// config.mongo ={};
// config.mongo.uri = process.env.MONGO_URI || 'localhost';
// config.mongo.db = 'WMS';

module.exports = config;