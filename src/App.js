import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login.js';
import {connect} from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);
        // this.state =  {
        //     loginSuccess: false,
        //     username: ""
        // }
        // this.handleLogin = this.handleLogin.bind(this);
    }

    // handleLogin(username, password) {
    //     simulating ajax call
    //     if(username == 'shrutiB' && password == 'shruti') {
    //         this.setState({
    //             loginSuccess: true,
    //             username: username
    //         })
    //     }
    // }

  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React + Redux</h1>
          </header>

          <Login/>

          {/* { (!this.props.loginSuccess )? <Login/> : <p> you are logged in {this.props.username}</p> } */}

      </div>
    );
  }
}
function mapStateToProps() {
    return {};
}
const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};
