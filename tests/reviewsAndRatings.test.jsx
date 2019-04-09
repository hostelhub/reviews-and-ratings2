import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import TotalRatings from '../client/src/components/TotalRatings';
import IndividualRatings from '../client/src/components/IndividualRatings';
import IndividualRatingsEntries from '../client/src/components/IndividualRatingsEntries';
import PercentageBar from '../client/src/components/PercentageBar';
import LatestReview from '../client/src/components/LatestReviews';
import LatestReviewEntry from '../client/src/components/LatestReviewEntry';

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

describe('Individual Ratings Entries', () => {
  const atmosphereEntry = shallow(<IndividualRatingsEntries ratingType="atmosphere" rating={3.2} />);
  const cleanlinessEntry = shallow(<IndividualRatingsEntries ratingType="cleanliness" rating={7.6} />);
  const facilitiesEntry = shallow(<IndividualRatingsEntries ratingType="facilities" rating={6.0} />);
  const locationEntry = shallow(<IndividualRatingsEntries ratingType="location" rating={8.4} />);
  const securityEntry = shallow(<IndividualRatingsEntries ratingType="security" rating={3.0} />);
  const staffEntry = shallow(<IndividualRatingsEntries ratingType="staff" rating={8.0} />);
  const valueForMoneyEntry = shallow(<IndividualRatingsEntries ratingType="valueForMoney" rating={5.2} />);

  it('should have a RatingDetails div', () => {
    expect(atmosphereEntry.find('RatingDetails').exists()).toEqual(true);
    expect(cleanlinessEntry.find('RatingDetails').exists()).toEqual(true);
    expect(facilitiesEntry.find('RatingDetails').exists()).toEqual(true);
    expect(locationEntry.find('RatingDetails').exists()).toEqual(true);
    expect(securityEntry.find('RatingDetails').exists()).toEqual(true);
    expect(staffEntry.find('RatingDetails').exists()).toEqual(true);
    expect(valueForMoneyEntry.find('RatingDetails').exists()).toEqual(true);
  });
  it('should render rating type', () => {
    expect(atmosphereEntry.find('.ratingType').text()).toEqual('Atmosphere');
    expect(cleanlinessEntry.find('.ratingType').text()).toEqual('Cleanliness');
    expect(facilitiesEntry.find('.ratingType').text()).toEqual('Facilities');
    expect(locationEntry.find('.ratingType').text()).toEqual('Location');
    expect(securityEntry.find('.ratingType').text()).toEqual('Security');
    expect(staffEntry.find('.ratingType').text()).toEqual('Staff');
    expect(valueForMoneyEntry.find('.ratingType').text()).toEqual('Value For Money');
  });
  it('should render rating', () => {
    expect(Number(atmosphereEntry.find('Rating').text())).toEqual(3.2);
    expect(Number(cleanlinessEntry.find('Rating').text())).toEqual(7.6);
    expect(Number(facilitiesEntry.find('Rating').text())).toEqual(6.0);
    expect(Number(locationEntry.find('Rating').text())).toEqual(8.4);
    expect(Number(securityEntry.find('Rating').text())).toEqual(3.0);
    expect(Number(staffEntry.find('Rating').text())).toEqual(8.0);
    expect(Number(valueForMoneyEntry.find('Rating').text())).toEqual(5.2);
  });
});

describe('Individual Percentage Bars', () => {
  const percentageBar = shallow(<PercentageBar percentage="32%" />);
  const anotherPercentageBar = shallow(<PercentageBar percentage="76%" />);
  const yetAnotherPercentageBar = shallow(<PercentageBar percentage="60%" />);

  it('should render a percentage bar', () => {
    expect(percentageBar.find('Percentage').exists()).toEqual(true);
    expect(anotherPercentageBar.find('Percentage').exists()).toEqual(true);
    expect(yetAnotherPercentageBar.find('Percentage').exists()).toEqual(true);
  });
});

describe('Latest Reviews', () => {
  const reviews = {
    reviews: [
      {
        review: 'This is my second review.',
        date: '2018-05-16T02:59:12.711Z',
      },
      {
        review: 'This is my first review.',
        date: '2018-04-07T01:38:25.590Z',
      },
      {
        review: 'This is my eighth review.',
        date: '2018-11-07T18:38:50.964Z',
      },
      {
        review: 'This is my third review.',
        date: '2018-06-25T22:01:06.624Z',
      },
      {
        review: 'This is my fifth review.',
        date: '2018-08-04T13:53:01.842Z',
      },
      {
        review: 'This is my sixth review.',
        date: '2018-08-16T20:05:00.911Z',
      },
      {
        review: 'This is my fourth review.',
        date: '2018-06-30T19:00:36.389Z',
      },
      {
        review: 'This is my seventh review.',
        date: '2018-11-03T12:35:03.382Z',
      },
    ],
  };

  const latestReviews = shallow(<LatestReview reviews={reviews} />);

  it('should render the latest four reviews', () => {
    expect(latestReviews.find('.latestReviewEntries').children()).toHaveLength(4);
    expect(latestReviews.find('.latestReviewEntries').childAt(0).key()).toEqual('2018-11-07T18:38:50.964Z');
    expect(latestReviews.find('.latestReviewEntries').childAt(0).props().review.review).toEqual('This is my eighth review.');
    expect(latestReviews.find('.latestReviewEntries').childAt(1).key()).toEqual('2018-11-03T12:35:03.382Z');
    expect(latestReviews.find('.latestReviewEntries').childAt(1).props().review.review).toEqual('This is my seventh review.');
    expect(latestReviews.find('.latestReviewEntries').childAt(2).key()).toEqual('2018-08-16T20:05:00.911Z');
    expect(latestReviews.find('.latestReviewEntries').childAt(2).props().review.review).toEqual('This is my sixth review.');
    expect(latestReviews.find('.latestReviewEntries').childAt(3).key()).toEqual('2018-08-04T13:53:01.842Z');
    expect(latestReviews.find('.latestReviewEntries').childAt(3).props().review.review).toEqual('This is my fifth review.');
  });
});
