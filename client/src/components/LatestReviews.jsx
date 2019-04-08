import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  color: #444;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  margin-top: 40px;
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
`;

class LatestReviews extends React.PureComponent {
  static getLatestReviews(reviews) {
    return reviews.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    }).slice(0, 4);
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        <Title>Latest Reviews</Title>
      </div>
    );
  }
}

LatestReviews.defaultProps = {
  reviews: {
    reviews: [],
    date: new Date(),
  },
};

LatestReviews.propTypes = {
  reviews: PropTypes.shape({
    _id: PropTypes.number,
    reviews: PropTypes.array,
  }),
};

export default LatestReviews;
