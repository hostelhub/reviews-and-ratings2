import React from 'react';
import PropTypes from 'prop-types';

class IndividualRatingsEntries extends React.PureComponent {
  render() {
    const { ratingType } = this.props;
    const { rating } = this.props;
    return (
      <div>
        <p>{JSON.stringify(ratingType)}</p>
        <p>{JSON.stringify(rating)}</p>
      </div>
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
