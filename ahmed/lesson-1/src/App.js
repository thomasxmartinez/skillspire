import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blaze from './blaze.jsx'; 
import Puppies from './puppies.jsx';
import Search from './search.jsx';
import Sounders from './Sounders.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const FourohFour = () => <h1>404</h1>

const h1 = <h1>Skillspire is the fun!!!!</h1>

function formatName (user) {
  return user.firstName + ' ' + user.lastName + ' is not your instructor';
}

const bamboo = {
  firstName: 'Michael',
  lastName: 'Jordan'
};

const element = <h1>look at me do JSX {formatName(bamboo)}</h1>





class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Seahawks</h1>
        </header>

        <p>{h1}</p>
        <blaze name="Ahmed"/>
        <Puppies/>
        <Switch>
         < Route exact path="/" component={Blaze}/>
         {/* <Route exact path="/search" component={Search}/> */}
         <Route exact path="/puppies" component={Puppies}/>
         <Route exact path={FourohFour}/>
         </Switch>

        <h6>{element} </h6>
        <blaze name= "Thien"/>
        <blaze name= "Roman"/>
        <blaze name= "Sabriye"/>


        <Sounders />
      
       </div>
       </BrowserRouter>
    );
  }
}

export default App;
