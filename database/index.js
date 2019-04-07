const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/reviewsAndRatings', { useNewUrlParser: true });

module.exports = db;
