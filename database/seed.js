const db = require('./index.js');
const Review = require('./Review.js');

const faker = require('faker');

let sampleReviews = [];
const groupType = ["Female", "Male", "Mixed Group"];
const ageRange = ["18-21", "18-21", "18-21", "18-21", "18-21", "21-35", "21-35", "21-35", "35-50", "50+"];
const nationality = ["United States", "United States", "United States", "United Kingdom", "United Kingdom", "France", "Germany", "Brazil"];

for (let i = 0; i < 3; i++) {
  var randomNum = Math.random() * Math.floor(10);
  
  sampleReviews.push({
    user: {
      username: faker.internet.userName(),
      nationality: nationality[Math.floor(Math.random() * Math.floor(nationality.length))],
      groupType: groupType[Math.floor(Math.random() * Math.floor(groupType.length))],
      ageRange: ageRange[Math.floor(Math.random() * Math.floor(ageRange.length))],
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

insertReviews();

console.log(sampleReviews);