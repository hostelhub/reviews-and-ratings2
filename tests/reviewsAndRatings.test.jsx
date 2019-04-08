import React from 'react';
import { shallow } from 'enzyme';

import TotalRatings from '../client/src/components/TotalRatings';
import IndividualRatings from '../client/src/components/IndividualRatings';

describe('Total Ratings', () => {
  const totalRatings = shallow(<TotalRatings totalRatings={7.5} amtOfRatings={869} />);
  const anotherTotalRatings = shallow(<TotalRatings totalRatings={9.0} amtOfRatings={484} />);

  it('should render a score', () => {
    expect(totalRatings.find('Score').exists()).toEqual(true);
    expect(Number(totalRatings.find('Score').text())).toEqual(7.5);
    expect(anotherTotalRatings.find('Score').exists()).toEqual(true);
    expect(Number(anotherTotalRatings.find('Score').text())).toEqual(9.0);
  });
  it('should render the corresponding rank', () => {
    expect(totalRatings.find('ScoreRank').exists()).toEqual(true);
    expect(totalRatings.find('ScoreRank').text()).toEqual('Very Good');
    expect(anotherTotalRatings.find('ScoreRank').exists()).toEqual(true);
    expect(anotherTotalRatings.find('ScoreRank').text()).toEqual('Superb');
  });
  it('should render the total amount of reviews', () => {
    expect(totalRatings.find('TotalReviews').exists()).toEqual(true);
    expect(totalRatings.find('TotalReviews').text()).toEqual('Based on 869 reviews');
    expect(anotherTotalRatings.find('TotalReviews').exists()).toEqual(true);
    expect(anotherTotalRatings.find('TotalReviews').text()).toEqual('Based on 484 reviews');
  });
});

describe('Individual Ratings', () => {
  const ratings = {
    atmosphere: 7.5,
    cleanliness: 8.3,
    facilities: 4.8,
    location: 6.4,
    security: 7.3,
    staff: 5.8,
    valueForMoney: 6.8,
  };
  const moreRatings = {
    atmosphere: 9.7,
    cleanliness: 9.7,
    facilities: 8.9,
    location: 8.7,
    security: 9.6,
    staff: 8.9,
    valueForMoney: 8.9,
  };
  const evenMoreRatings = {
    atmosphere: 5.4,
    cleanliness: 5.3,
    facilities: 4.5,
    location: 4.4,
    security: 5.3,
    staff: 4.5,
    valueForMoney: 4.5,
  };

  const individualRatings = shallow(<IndividualRatings ratings={ratings} />);
  const moreIndividualRatings = shallow(<IndividualRatings ratings={moreRatings} />);
  const evenMoreIndividualRatings = shallow(<IndividualRatings ratings={evenMoreRatings} />);

  it('should render a component for each rating type', () => {
    expect(individualRatings.children()).toHaveLength(Object.keys(ratings).length);
    expect(moreIndividualRatings.children()).toHaveLength(Object.keys(moreRatings).length);
    expect(evenMoreIndividualRatings.children()).toHaveLength(Object.keys(evenMoreRatings).length);
  });
});
