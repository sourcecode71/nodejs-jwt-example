const winston = require('winston');
const config = require("config");
require('winston-mongodb');
require('express-async-errors');

module.exports = function() {
    
    winston.exceptions.handle(new winston.transports.File({ filename: 'uncaughtExceptions.log' }));
  
    process.on('unhandledRejection', (ex) => {
        throw ex;
    });
    
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));

  /*  winston.add(winston.transports.MongoDB, { 
        db: config.get('db'),
        level: 'info'
   }); */
  
}