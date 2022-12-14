const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology:true
});

module.exports = mongoose.connection;
