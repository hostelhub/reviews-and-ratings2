const mongoose = require('mongoose');
const db = require('./index.js');

const reviewSchema = new mongoose.Schema({
  _id: Number,
  reviews: Array,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
