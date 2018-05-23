import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blaze from './blaze.jsx'
import Puppies from './puppies.jsx'
import Search from './search.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const FourOhFour = () => <h1>404</h1>

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Switch>
          <Route exact path="/" component={Blaze}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/puppies" component={Puppies}/>
          <Route component={FourOhFour}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
