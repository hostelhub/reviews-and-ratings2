import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import PercentageBar from './PercentageBar';

const RatingsListEntry = styled.div`
  padding: 10px;
`;

const RatingDetails = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

const Rating = styled.div`
  font-weight: bold;
`;

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
          <div>{type}</div>
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
