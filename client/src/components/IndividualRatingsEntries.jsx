import React from 'react';
import PropTypes from 'prop-types';

class IndividualRatingsEntries extends React.PureComponent {
  static capitalizeFirstChar(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  render() {
    const { ratingType } = this.props;
    const { rating } = this.props;
    return (
      <div>
        <div>
          <div>{IndividualRatingsEntries.capitalizeFirstChar(ratingType)}</div>
          <div>{rating}</div>
        </div>
        <div>
          <div></div>
        </div>
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
