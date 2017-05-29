// import libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import Logic component
import LoginForm from './components/LoginForm';

// Create a new component
class App extends Component {
  render () {
    return (
      <div className="login-form">
        <LoginForm />
      </div>
    );
  }
}


// Take a component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
