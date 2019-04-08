const express = require('express');

const app = express();
const port = 7000;

const Review = require('../database/Review.js');

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/reviews/:_id', (req, res) => {
  Review.find(req.params)
    .exec((err, reviews) => {
      if (err) throw err;
      res.send(reviews);
    });
});


app.listen(port, () => console.log(`Server is listening on port ${port}`));
