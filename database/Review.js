const mongoose = require('mongoose');
const db = require('./index.js');

const reviewSchema = new mongoose.Schema({
  user: {
    username: String,
    nationality: String,
    groupType: String,
    ageRange: String,
    totalReviews: Number
  },
  ratings: {
    valueForMoney: Number,
    location: Number,
    atmosphere: Number,
    facilities: Number,
    security: Number,
    staff: Number,
    cleanliness: Number
  },
  english: Boolean,
  review: String,
  date: Date
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;