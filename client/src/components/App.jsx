import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

import ReviewsAndRatings from './ReviewsAndRatings.jsx'

const Reviews = styled.div`
  box-sizing: border-box;
  font-family: "Noto", Helvetica, Arial, sans-serif;
`;

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount () {
    const self = this;

    $.ajax({
      method: 'GET',
      url: '/api/reviews/2',
      success: (reviews) => { 
        self.setState({reviews: reviews});
      },
      error: (error) => { throw error }
    });
  }

  render () {
    return (
      <Reviews>
        <ReviewsAndRatings reviews={this.state.reviews[0]}/>
      </Reviews>
    )
  }
}

export default App;
