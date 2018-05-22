import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //importing the modules for BrowserRouter which is a higher order component--routes first then you tell what to render
import Wowza from './newComp.js'; //page we wrote to route to
import Welcome from './newFile.js'; //add new file newFile.js with a class
import Search from './search.jsx'; //this will show you how to make a SPA feel like a much larger application
//yall wanna learn yarn?

const FourOhFour = () => <h1>404</h1>;
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
          <Welcome name="Thomas" />
          <Switch>
            <Route exact path="/" component={Wowza} />
            <Route exact path="/search" component={Search} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
//if we go to /<anything> then it will stay with that path//exact path means only match this only//component is render whatever is in Wowza
export default App;
//when you use the browser instead of building small apps to work with the browser it is all built in

//install prettier for react and install airbnb
// (param1, param2, paramN) => expression

// ES5
// var multiplyES5 = function(x, y) {
//   return x * y;
// };

// ES6
// const multiplyES6 = (x, y) => { return x * y };
