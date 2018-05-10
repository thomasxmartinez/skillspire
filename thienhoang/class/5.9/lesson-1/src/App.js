import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const h1 = <h1>Skillsdgpire is the fun!!!!</h1>
function formatName (user) {
  return user.firstName + ' ' + user.lastName + ' is not your instructor';
}

const user = {
  firstName: 'Kobe',
  lastName: 'Bryant'
};

const element = <h1>look at me do JSX {formatName(user)}</h1>


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jungle</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section> {h1}{element}</section>

      </div>
    );
  }
}

export default App;
