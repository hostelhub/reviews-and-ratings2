import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ratings = styled.div`
  display: flex;  
`;

const Score = styled.div`
  background-color: #ff7547;
  border-radius: 3px;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  padding: 8px;
`;

class TotalRatings extends React.Component {
  static getScoreRank(score) {
    if (score >= 9) {
      return 'Superb';
    }
    if (score >= 8) {
      return 'Fabulous';
    }
    if (score >= 7) {
      return 'Very Good';
    }
    if (score >= 6) {
      return 'Good';
    }
    return 'Rating';
  }

  render() {
    const { totalRatings } = this.props;
    const { amtOfRatings } = this.props;
    const totalReviews = `Based on ${amtOfRatings} reviews`;
    return (
      <Ratings>
        <Score>{totalRatings}</Score>
        <div className="ratingDetails">
          <div className="scoreRank">{TotalRatings.getScoreRank(totalRatings)}</div>
          <div className="totalReviews">{totalReviews}</div>
        </div>
      </Ratings>
    );
  }
}

TotalRatings.defaultProps = {
  totalRatings: 0,
  amtOfRatings: 0,
};

TotalRatings.propTypes = {
  totalRatings: PropTypes.number,
  amtOfRatings: PropTypes.number,
};

export default TotalRatings;
