import React from 'react';
import { shallow } from 'enzyme';

import TotalRatings from '../client/src/components/TotalRatings';

describe('Total Ratings', () => {
  const totalRatings = shallow(<TotalRatings totalRatings={7.5} amtOfRatings={869} />);
  const anotherTotalRatings = shallow(<TotalRatings totalRatings={9.0} amtOfRatings={484} />);
  it('should render a score', () => {
    expect(totalRatings.find('.score').exists()).toEqual(true);
    expect(Number(totalRatings.find('.score').text())).toEqual(7.5);
    expect(anotherTotalRatings.find('.score').exists()).toEqual(true);
    expect(Number(anotherTotalRatings.find('.score').text())).toEqual(9.0);
  });
  it('should render the corresponding rank', () => {
    expect(totalRatings.find('.scoreRank').exists()).toEqual(true);
    expect(totalRatings.find('.scoreRank').text()).toEqual('Very Good');
    expect(anotherTotalRatings.find('.scoreRank').exists()).toEqual(true);
    expect(anotherTotalRatings.find('.scoreRank').text()).toEqual('Superb');
  });
  it('should render the total amount of reviews', () => {
    expect(totalRatings.find('.totalReviews').exists()).toEqual(true);
    expect(totalRatings.find('.totalReviews').text()).toEqual('Based on 869 reviews');
    expect(anotherTotalRatings.find('.totalReviews').exists()).toEqual(true);
    expect(anotherTotalRatings.find('.totalReviews').text()).toEqual('Based on 484 reviews');
  });
});
