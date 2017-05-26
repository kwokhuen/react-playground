// import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import component from AntDesign
import { Button } from 'antd';

// Create a new component
class App extends React.Component {

  // API fetching logic
  APIcaller() {

    https://api.dev.pepwave.com/api/oauth2/auth?client_id=ba3c3c5c3c81af715e9bc9fc2b96e363&response_type=[code/token]&redirect_uri=[REDIRECT_URI]
    fetch('https://api1.dev.pepwave.com/rest/o/riMA5x/g', {
      credentials: 'include',
      method: 'get'
    })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    }, (error) => {
      console.log("Something Went wrong", error);
    })
    .then((data) => {
      var dummyData = require("./../dummyData.txt");
      console.log("Data being fetched");
    })
    .catch(err => console.log("Unexpected error", err));
  }

  render () {
    return <Button onClick={this.APIcaller}>Michaelsofts Dev Inc</Button>
  }
}


// Take a component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
