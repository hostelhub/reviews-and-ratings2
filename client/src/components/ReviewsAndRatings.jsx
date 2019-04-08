import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TotalRatings from './TotalRatings';
import IndividualRatings from './IndividualRatings';

const Title = styled.h2`
  color: #444;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  margin-top: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
`;

const LineBreak = styled.hr`
  border: 1px dotted #dedede;
  margin-bottom: 15px;
  margin-top: 15px;
`;

class ReviewsAndRatings extends React.Component {
  static findAverageRating(ratings) {
    const total = ratings.reduce((acc, currVal) => acc + currVal);
    return Math.round((total / ratings.length) * 10) / 10;
  }

  static findAverage(reviews) {
    const ratings = {
      atmosphere: [],
      cleanliness: [],
      facilities: [],
      location: [],
      security: [],
      staff: [],
      valueForMoney: [],
    };

    for (let r = 0; r < reviews.length; r += 1) {
      const ratingEntries = Object.entries(reviews[r].ratings);
      for (let e = 0; e < ratingEntries.length; e += 1) {
        ratings[ratingEntries[e][0]].push(ratingEntries[e][1]);
      }
    }

    const allRatingEntries = Object.entries(ratings);
    for (let a = 0; a < allRatingEntries.length; a += 1) {
      ratings[allRatingEntries[a][0]] = ReviewsAndRatings.findAverageRating(allRatingEntries[a][1]);
    }

    return ratings;
  }

  render() {
    const { reviews } = this.props;
    const ratings = ReviewsAndRatings.findAverage(reviews.reviews);
    const totalRatings = ReviewsAndRatings.findAverageRating(Object.values(ratings));
    return (
      <div id="reviewsAndRatings">
        <Title>Reviews & Ratings</Title>
        <TotalRatings
          totalRatings={totalRatings}
          amtOfRatings={reviews.reviews.length}
        />
        <LineBreak/>
        <IndividualRatings ratings={ratings} />
        <LineBreak/>
      </div>
    );
  }
}

ReviewsAndRatings.defaultProps = {
  reviews: {
    reviews: [
      {
        ratings: {
          atmosphere: [],
          cleanliness: [],
          facilities: [],
          location: [],
          security: [],
          staff: [],
          valueForMoney: [],
        },
      },
    ],
  },
};

ReviewsAndRatings.propTypes = {
  reviews: PropTypes.shape({
    _id: PropTypes.number,
    reviews: PropTypes.array,
  }),
};

export default ReviewsAndRatings;
