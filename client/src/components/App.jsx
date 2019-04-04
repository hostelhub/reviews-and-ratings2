import React from 'react';
import $ from 'jquery';
import ReviewsAndRatings from './ReviewsAndRatings.jsx'

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
      <div id="reviews">
        <ReviewsAndRatings reviews={this.state.reviews[0]}/>
      </div>
    )
  }
}

export default App;
