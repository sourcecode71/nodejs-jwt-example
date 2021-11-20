const winston = require('winston');
const mongoose = require('mongoose');
const config = require("config");

const mongConfig ={
  useNewUrlParser: true, 
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology:true
  
}

module.exports = function() {
  const db = config.get('db');
  mongoose.connect(db,mongConfig)
    .then(() => winston.info(`Connected to ${db}...`));
}