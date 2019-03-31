const express = require('express');
const app = express();
const port = 7000;

const Review = require('../database/Review.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/reviews', (req, res) => {
  Review.find()
    .exec((err, reviews) => {
      if (err) throw err;
      res.send(reviews);
    });
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));