import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'styled-icons/boxicons-regular/Calendar';
import PropType from 'prop-types';

const CalendarIcon = styled(Calendar)`
  height: 17px;
`;

class LatestReviewEntry extends React.PureComponent {
  static findAvgScore(ratings) {
    const scores = Object.values(ratings);
    const score = scores.reduce((acc, currVal) => acc + currVal) / scores.length;
    return Math.round(score * 10) / 10;
  }

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

  static getDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const reviewDate = new Date(date);
    const day = reviewDate.getDay();
    const month = months[reviewDate.getMonth()];
    const year = reviewDate.getFullYear();

    return `${day} ${month} ${year}`;
  }

  render() {
    const { review } = this.props;
    const avgScore = LatestReviewEntry.findAvgScore(review.ratings);
    return (
      <div className="ReviewEntry">
        <div className="scoreAndDate">
          <div className="scoredetails">
            <div className="score">
              {avgScore}
            </div>
            <div className="rank">{LatestReviewEntry.getScoreRank(avgScore)}</div>
          </div>
          <div className="date">
            <CalendarIcon />
            <p>{LatestReviewEntry.getDate(review.date)}</p>
          </div>
        </div>
      </div>
    );
  }
}

LatestReviewEntry.defaultProps = {
  review: {
    user: {
      nationality: '',
      groupType: '',
      ageRange: '',
    },
    ratings: {
      valueForMoney: 0,
      location: 0,
      atmosphere: 0,
      facilities: 0,
      security: 0,
      staff: 0,
      cleanliness: 0,
    },
    review: '',
    date: '',
  },
};

LatestReviewEntry.propTypes = {
  review: PropType.shape({
    user: PropType.object,
    ratings: PropType.object,
    review: PropType.string,
    date: PropType.string,
  }),
};

export default LatestReviewEntry;
