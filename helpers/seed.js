const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/reviewsAndRatings', { useNewUrlParser: true });

const faker = require('faker');

const reviewSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
  language: String,
  review: String,
  date: Date
});

const Review = mongoose.model('Review', reviewSchema);

let sampleReviews = [];
const groupType = ["Female", "Male", "Mixed Group"];
const ageRange = ["18-21", "18-21", "18-21", "18-21", "18-21", "21-35", "21-35", "21-35", "35-50", "50+"];

for (let i = 0; i < 3; i++) {
  var randomNum = Math.random() * Math.floor(10);
  
  sampleReviews.push({
    user: {
      username: faker.internet.userName(),
      nationality: faker.address.country(),
      groupType: groupType[Math.floor(Math.random() * Math.floor(groupType.length))],
      ageRange: ageRange[Math.floor(Math.random() * Math.floor(groupType.length))],
      totalReviews: faker.random.number(40)
    },
    ratings: {
      valueForMoney: faker.random.number({min:randomNum, max:10}),
      location: faker.random.number({min:randomNum, max:10}),
      atmosphere: faker.random.number({min:randomNum, max:10}),
      facilities: faker.random.number({min:randomNum, max:10}),
      security: faker.random.number({min:randomNum, max:10}),
      staff: faker.random.number({min:randomNum, max:10}),
      cleanliness: faker.random.number({min:randomNum, max:10}),
    },
    language: faker.random.boolean(chance_of_getting_true=90),
    review: faker.lorem.paragraph(),
    date: faker.date.past()
  });
}

const insertReviews = () => {
  Review.create(sampleReviews)
    .then(() => db.disconnect());
}

// insertReviews();

console.log(sampleReviews);