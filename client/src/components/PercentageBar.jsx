import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Bar = styled.div`
  background-color: #efefef;
  border-radius: 3px;
  height: .375rem;
  width: 225px;
`;
Bar.displayName = 'Bar';

const Percentage = styled.div`
  background-color: #ff7547;
  border-radius: 3px;
  height: inherit;
  z-index: 1;
`;
Percentage.displayName = 'Percentage';

class PercentageBar extends React.PureComponent {
  render() {
    const { percentage } = this.props;
    return (
      <Bar>
        <Percentage style={{ width: percentage }} />
      </Bar>
    );
  }
}

PercentageBar.defaultProps = {
  percentage: '0%',
};

PercentageBar.propTypes = {
  percentage: PropTypes.string,
};

export default PercentageBar;
