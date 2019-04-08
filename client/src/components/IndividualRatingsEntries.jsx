import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PercentageBar from './PercentageBar';

const RatingsListEntry = styled.div`
  padding: 10px;
`;
RatingsListEntry.displayName = 'RatingsListEntry';

const RatingDetails = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;
RatingDetails.displayName = 'RatingDetails';

const Rating = styled.div`
  font-weight: bold;
`;
Rating.displayName = 'RatingDetails';

class IndividualRatingsEntries extends React.PureComponent {
  static capitalizeFirstCharAndSplit(string) {
    return (string[0].toUpperCase() + string.slice(1)).split(/(?=[A-Z])/).join(' ');
  }

  render() {
    const { ratingType } = this.props;
    const { rating } = this.props;
    const type = IndividualRatingsEntries.capitalizeFirstCharAndSplit(ratingType);
    return (
      <RatingsListEntry>
        <RatingDetails>
          <div className="ratingType">{type}</div>
          <Rating>{rating}</Rating>
        </RatingDetails>
        <PercentageBar percentage={`${rating * 10}%`} />
      </RatingsListEntry>
    );
  }
}

IndividualRatingsEntries.defaultProps = {
  ratingType: '',
  rating: 0,
};

IndividualRatingsEntries.propTypes = {
  ratingType: PropTypes.string,
  rating: PropTypes.number,
};

export default IndividualRatingsEntries;
