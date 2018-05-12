import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayAlert from './components/alert.js';


const h1 = <h1>Skillspire is the fun!!!!</h1>


function formatName (user) {
    return user.firstName + ' ' + user.lastName + ' is not your instructor';
}

const bamboo = {
    firstName: 'Kobe',
    lastName: 'Bryant'
};

const element = <h1>look at me do JSX {formatName(bamboo)}</h1>

function Welcome (props) {
    return <h1>You have a fake name, {props.name}</h1>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Banana MAN</h1>

        </header>
        <p className="App-intro"></p>
        <p>{h1}</p>
        <h6>{element} </h6>
        <Welcome name="Thien"/>
        <Welcome name="Roman"/>
        <DisplayAlert firstWord="Hello" secondWord=" Skillspire" thirdWord=" class"/>
      </div>
    );
  }
}

export default App;
