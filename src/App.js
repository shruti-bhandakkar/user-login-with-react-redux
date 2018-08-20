import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React + Redux</h1>
          </header>

          { (!this.props.authentication.login)? <Login/> : <p> you are logged in {this.props.authentication.username}</p> }


      </div>
    );
  }
}
function mapStateToProps(state) {
    return state;
}
const connectedApp = connect(mapStateToProps)(App);
export default connectedApp;
