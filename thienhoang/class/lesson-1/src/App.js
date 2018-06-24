// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayAlert from './components/alert.js';
import Welcome from './components/welcome.js';
import Blaze from './components/blaze.jsx';
import Puppies from './components/puppies.jsx';
import Search from './components/search.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const h1 = <h1>Skillspire is the fun!!!!</h1>


function formatName (user) {
    return user.firstName + ' ' + user.lastName + ' is not your instructor';
}

const bamboo = {
    firstName: 'Kobe',
    lastName: 'Bryant'
};

const element = <h1>look at me do JSX {formatName(bamboo)}</h1>


class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Banana MAN</h1>

        </header>
        {/* <p className="App-intro"></p>
        <p>{h1}</p>
        <h6>{element} </h6>

        <Welcome name="Thien"/>
        <DisplayAlert firstWord="Hello" secondWord=" Skillspire" thirdWord=" class"/> */}
        <Switch>
          <Route exact path="/" component={Blaze}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/puppies" component={Puppies}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
