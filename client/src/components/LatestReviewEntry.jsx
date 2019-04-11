import React from 'react';
import styled from 'styled-components';
import { Calendar } from 'styled-icons/boxicons-regular/Calendar';
import PropType from 'prop-types';

const ReviewEntry = styled.div`
  padding: 14px;
  width: 1250px;
`;
ReviewEntry.displayName = 'ReviewEntry';

const ScoreAndDate = styled.div`
  display: flex;
  align-content: space-between;
`;

const ScoreDetails = styled.div`
  display: flex;
`;
ScoreDetails.displayName = 'ScoreDetails';

const Score = styled.div`
  background-color: #ff7547;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  padding: 5px;
`;
Score.displayName = 'Score';

const Rank = styled.div`
  color: #ff7547;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  padding-left: 8px;
`;
Rank.displayName = 'Rank';

const ReviewDate = styled.div`
  color: #888;
  display: flex;
  font-size: 14px;
`;
ReviewDate.displayName = 'Date';

const CalendarIcon = styled(Calendar)`
  height: 17px;
`;
CalendarIcon.displayName = 'CalendarIcon';

class LatestReviewEntry extends React.PureComponent {
  static findAvgScore(ratings) {
    const scores = Object.values(ratings);
    let score = scores.reduce((acc, currVal) => acc + currVal) / scores.length;
    score = Math.round(score * 10) / 10;
    if (score % 1 === 0) {
      score += '.0';
    }
    return score;
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
    const day = reviewDate.getDate();
    const month = months[reviewDate.getMonth()];
    const year = reviewDate.getFullYear();

    return `${day} ${month} ${year}`;
  }

  static getUserInfo(user) {
    return `${user.nationality}, ${user.groupType}, ${user.ageRange}`;
  }

  render() {
    const { review } = this.props;
    const avgScore = LatestReviewEntry.findAvgScore(review.ratings);
    return (
      <ReviewEntry>
        <ScoreAndDate>
          <ScoreDetails>
            <Score>
              {avgScore}
            </Score>
            <Rank>{LatestReviewEntry.getScoreRank(avgScore)}</Rank>
          </ScoreDetails>
          <ReviewDate>
            <CalendarIcon />
            <div>{LatestReviewEntry.getDate(review.date)}</div>
          </ReviewDate>
        </ScoreAndDate>
        <div className="review">{review.review}</div>
        <hr />
        <div className="userInfo">{LatestReviewEntry.getUserInfo(review.user)}</div>
      </ReviewEntry>
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
