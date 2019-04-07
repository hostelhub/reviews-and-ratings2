import React from 'react';
import PropTypes from 'prop-types';

class IndividualRatings extends React.Component {
  render() {
    const { ratings } = this.props;
    return (
      <div>
        <IndividualRatingsEntries ratings={ratings} />
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
