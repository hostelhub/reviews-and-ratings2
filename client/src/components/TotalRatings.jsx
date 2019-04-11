import React from 'react';
import PropTypes from 'prop-types';

const Ratings = styled.div`
  display: flex;  
`;
Ratings.displayName = 'Ratings';

const Score = styled.div`
  background-color: #ff7547;
  border-radius: 3px;
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  padding: 8px;
`;
Score.displayName = 'Score';

const RatingDetails = styled.div`
  color: #ff7547;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
`;
RatingDetails.displayName = 'RatingDetails';

const ScoreRank = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
ScoreRank.displayName = 'ScoreRank';

const TotalReviews = styled.div`
  font-size: 14px;
`;
TotalReviews.displayName = 'TotalReviews';

class TotalRatings extends React.PureComponent {
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
        <RatingDetails>
          <ScoreRank>{TotalRatings.getScoreRank(totalRatings)}</ScoreRank>
          <TotalReviews>{totalReviews}</TotalReviews>
        </RatingDetails>
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
