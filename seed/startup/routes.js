const express = require('express');
var cors = require('cors');
const auth = require('../routes/auth');
const users = require('../routes/users');
const country = require('../routes/country');
const error = require('../middleware/error');

module.exports = function(app) {
  app.use(cors());
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/country', country);
  app.use(error);
}