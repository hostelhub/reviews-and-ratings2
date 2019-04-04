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
        <p>Hello</p>
        {JSON.stringify(this.state.reviews)}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));