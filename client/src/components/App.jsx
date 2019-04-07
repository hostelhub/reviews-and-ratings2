import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

import ReviewsAndRatings from './ReviewsAndRatings';

const Reviews = styled.div`
  box-sizing: border-box;
  font-family: Arial;
  margin: 5px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    const self = this;

    $.ajax({
      method: 'GET',
      url: '/api/reviews/2',
      success: (reviews) => {
        self.setState({ reviews });
      },
      error: (error) => { throw error; },
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <Reviews>
        <ReviewsAndRatings reviews={reviews[0]} />
      </Reviews>
    );
  }
}

export default App;
