import React from 'react';
import ReactDOM from 'react-dom';
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
      url: '/api/reviews',
      success: (reviews) => { 
        callback(reviews); 
      },
      error: (error) => { throw error }
    });
  }
}

ReactDOM.render(<App />, document.getElementById("app"));