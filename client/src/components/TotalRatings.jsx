import React from 'react';
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
  constructor (props) {
    super(props)
  }

  getScoreRank (score) {
    if (score >= 9) {
      return "Superb";
    } else if (score >= 8) {
      return "Fabulous";
    } else if (score >= 7) {
      return "Very Good";
    } else if (score >= 6) {
      return "Good";
    } else {
      return "Rating";
    }
  }
  
  render () {
    return(
      <Ratings>
        <Score>{this.props.totalRatings}</Score>
        <div className="ratingDetails">
          <div className="scoreRank">{this.getScoreRank(Number(this.props.totalRatings))}</div>
          <div className="totalReviews">Based on {this.props.amtOfRatings} reviews</div>
        </div>
      </Ratings>
    )
  }
}

export default TotalRatings;
