var config = module.exports = {};

config.env = 'development';
config.hostname = '127.0.0.1';
config.port = 8000 || process.env.PORT;

config.mongo ={};
config.mongo.uri = process.env.MONGO_URI || 'mongodb://localhost:27017/';
config.mongo.db = 'WMS';

