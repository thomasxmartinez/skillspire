import React, { ReactDOM, Component } from 'react';
import logo from './logo.svg';
import './App.css';

const h1 = <h1>Hello, World</h1>; //this is JSX, JSX will do some cool things that add HTML and JS

function formatName(user) {
  return user.firstName + ' ' + user.lastName + ' is not your instructor';
}
const user = {
  firstName: 'Professor',
  lastName: 'X'
};
const element = <h1>look at this go! {formatName(user)}</h1>; //we just used a javascript function with JSX to create an element in React

function Welcome(props) {
  <h2>It is {new Date().toLocaleTimeString()}.</h2>;

  return <h1>Hello, {props.name}</h1>;
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
          <h1 className="App-title">Banana Man</h1>
        </header>
        <p className="App-intro">{h1}</p>
        <p>{h1}</p>
        <p>{user.firstName}</p>;
        {element}
        <Welcome name="Thien" />
        <Welcome name="Roman" />
        <Welcome name="Sabriye" />
        {function tick() {
          const element = (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
          );
          // highlight-next-line
          ReactDOM.render(element, document.getElementById('root'));
        }}
      </div>
    );
  }
}

export default App;
