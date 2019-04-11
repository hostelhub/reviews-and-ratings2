import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LatestReviewEntry from './LatestReviewEntry';

const Title = styled.h2`
  color: #444;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  margin-top: 40px;
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
`;
Title.displayName = 'Title';

const LatestReviewEntries = styled.div`
  display: flex;
`;

class LatestReviews extends React.PureComponent {
  static getLatestReviews(reviews) {
    return reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        <Title>Latest Reviews</Title>
        <LatestReviewEntries>
          {LatestReviews.getLatestReviews(reviews.reviews)
            .map(review => <LatestReviewEntry key={review.date} review={review} />)}
        </LatestReviewEntries>
      </div>
    );
  }
}

LatestReviews.defaultProps = {
  reviews: {
    reviews: [],
  },
};

LatestReviews.propTypes = {
  reviews: PropTypes.shape({
    _id: PropTypes.number,
    reviews: PropTypes.array,
  }),
};

export default LatestReviews;
