var config = require('./config.global');

config.env = 'product';
config.hostname = '127.0.0.1';
config.port = 8000 || process.env.PORT;

config.mongo.uri = 'mongodb+srv://scanner-backend:ihiWJnYVzh0v9t3e@cluster0.ouvn5.mongodb.net/'
config.mongo.db = 'WMS'

module.exports = config;