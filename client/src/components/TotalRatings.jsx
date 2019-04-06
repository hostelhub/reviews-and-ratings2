import React from 'react';

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
      <div className="totalRatings">
        <div className="score">{this.props.totalRatings}</div>
        <div className="ratingDetails">
          <div className="scoreRank">{this.getScoreRank(Number(this.props.totalRatings))}</div>
          <div className="totalReviews">Based on {this.props.amtOfRatings} reviews</div>
        </div>
      </div>
    )
  }
}

export default TotalRatings;
