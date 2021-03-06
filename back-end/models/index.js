const mongoose = require('mongoose');
const User = require('./user');
const Post = require('./post');
const Comments = require('./comments');
const URI = require('../config');

// console.log('URI: ', URI);
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL || URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

mongoose.connection.on('connected', () => {
  console.log('Established Mongoose Default Connection');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose Default Connection Error : ' + err);
});

const models = { User, Post, Comments, connectDb };

module.exports = models;
