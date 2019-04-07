import React from 'react';
import PropTypes from 'prop-types';

import IndividualRatingsEntries from './IndividualRatingsEntries';

class IndividualRatings extends React.PureComponent {
  render() {
    const { ratings } = this.props;
    return (
      <div>
        {Object.entries(ratings).map((rating) => {
          return (
            <IndividualRatingsEntries
              ratingType={rating[0]}
              rating={rating[1]}
            />
          );
        })}
      </div>
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
  ratings: PropTypes.objectOf(PropTypes.number),
};

export default IndividualRatings;
