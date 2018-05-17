import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const h1 = <h1>Skillspire is the fun!!!!</h1>


function formatName (user) {
    return user.firstName + ' ' + user.lastName + ' is not your instructor';
}

const ahmed = {
    firstName: 'Kobe',
    lastName: 'Bryant'
};

function soccer(props) {
    return <h1>spanish la liga, {props.team}</h1>
  }


const element = <h1>look at me do JSX {formatName(ahmed)}</h1>
class App extends Component {
  render() {
return (
          <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SoundersFC</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{h1}</p>
           <h6>{element} </h6>
        <Welcome name="Thien"/>
        <Welcome name="Roman"/>
        <Welcome name="Sabriye"/>
        <Welcome name="Ahmed"/>
        <Welcome name="Marisha"/>
      </div>
    );
  }
}


export default App;
