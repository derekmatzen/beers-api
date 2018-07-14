const mongoose = require('mongoose');

// set up default mongoose connection
const mongoDB = process.env.MONGODB_URI; 
mongoose.connect(mongoDB);

// add Promise library
mongoose.Promise = Promise;
// get the default connection
const db = mongoose.connection;

// bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// export beer model
module.exports.Beer = require('./beer');