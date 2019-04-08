const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1/reviewsAndRatings', { useNewUrlParser: true });

module.exports = db;
