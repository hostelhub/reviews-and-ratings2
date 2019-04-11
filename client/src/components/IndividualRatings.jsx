import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IndividualRatingsEntries from './IndividualRatingsEntries';

const RatingsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-top: 10px;
`;

class IndividualRatings extends React.PureComponent {
  render() {
    const { ratings } = this.props;
    return (
      <RatingsList>
        {Object.entries(ratings).map(rating => (
          <IndividualRatingsEntries
            key={rating[0]}
            ratingType={rating[0]}
            rating={rating[1]}
          />
        ))}
      </RatingsList>
    );
  }
}

IndividualRatings.defaultProps = {
  ratings: {
    atmosphere: 0,
    cleanliness: 0,
    facilities: 0,
    location: 0,
    security: 0,
    staff: 0,
    valueForMoney: 0,
  },
};

IndividualRatings.propTypes = {
  ratings: PropTypes.objectOf(PropTypes.string),
};

export default IndividualRatings;
