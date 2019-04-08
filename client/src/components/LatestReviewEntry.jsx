import React from 'react';
import PropType from 'prop-types';

class LatestReviewEntry extends React.PureComponent {
  render() {
    const { review } = this.props;
    return (
      <div></div>
    );
  }
}

LatestReviewEntry.defaultProps = {
  review: {
    user: {
      nationality: "",
      groupType: "",
      ageRange: "",
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
    review: "",
    date: "",
  }
}

LatestReviewEntry.propTypes = {
  review: PropType.shape({
    user: PropType.object,
    ratings: PropType.object,
    review: PropType.string,
    review: PropType.string,
  }),
}

export default LatestReviewEntry;
