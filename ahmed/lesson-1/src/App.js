import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './newfile'; 

const h1 = <h1>Skillspire is the fun!!!!</h1>

function formatName (user) {
  return user.firstName + ' ' + user.lastName + ' is not your instructor';
}

const bamboo = {
  firstName: 'Michael',
  lastName: 'Jordan'
};

const element = <h1>look at me do JSX {formatName(bamboo)}</h1>




function Sounders (props) {
  return <h1>Players List, {props.player}</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Seahawks</h1>
        </header>

        <p>{h1}</p>
        <h6>{element} </h6>
        <Welcome name= "Thien"/>
        <Welcome name= "Roman"/>
        <Welcome name= "Sabriye"/>


        <Sounders player="Sabriye"/>

      </div>
    );
  }
}

export default App;
