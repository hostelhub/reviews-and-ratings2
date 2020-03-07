const mongoose = require('mongoose');
const password = require('./config');

const db = mongoose.connect(`mongodb+srv://reviewsAdmin:${password}@cluster0-0qokg.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });

module.exports = db;
