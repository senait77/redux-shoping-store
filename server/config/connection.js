const mongoose = require('mongoose');

const MONGODB_ENDPOINT =
    process.env.MONGODB_ENDPOINT ||
    console.log(redText, 'You must have a Mongo Database endpoint.');

mongoose.connect(MONGODB_ENDPOINT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
