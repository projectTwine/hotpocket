import React, { Component } from 'react';
import logo from './logo.svg';
import RegisteredUsersList from './RegisteredUsersList.jsx';


//Styles
//TODO: swap out the types of css files loading 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Kinda Testing React Functionality</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RegisteredUsersList/>
      </div>
    );
  }
}

export default App;
