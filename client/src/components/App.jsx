import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount () {
    const callback = (reviews) => {
      this.setState({reviews: reviews});
    }

    $.ajax({
      method: 'GET',
      url: '/api/reviews/2',
      success: (reviews) => { 
        callback(reviews); 
      },
      error: (error) => { throw error }
    });
  }

  render () {
    return (
      <div>
        
      </div>
    )
  }
}

export default App;
