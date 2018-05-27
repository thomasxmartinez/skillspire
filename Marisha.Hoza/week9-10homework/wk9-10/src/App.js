import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './nav.jsx';
import AllWords from './vocab.jsx';
import Sort from './sort.jsx';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Definitions</h1>
          </header>

          <nav>
            <Navigation/>
          </nav>
          
          <ol> 
            <Switch>
              <Route exact path = "/" component = {AllWords} />
              <Route exact path = "/a" render = {(props) => (<Sort {...props} choice="A"/>)}/>
              <Route exact path = "/b" render = {(props) => (<Sort {...props} choice="B"/>)}/>
              <Route exact path = "/c" render = {(props) => (<Sort {...props} choice="C"/>)}/>
              <Route exact path = "/d" render = {(props) => (<Sort {...props} choice="D"/>)}/>
              <Route exact path = "/e" render = {(props) => (<Sort {...props} choice="E"/>)}/>
              <Route exact path = "/f" render = {(props) => (<Sort {...props} choice="F"/>)}/>
              <Route exact path = "/g" render = {(props) => (<Sort {...props} choice="G"/>)}/>
              <Route exact path = "/h" render = {(props) => (<Sort {...props} choice="H"/>)}/>
              <Route exact path = "/i" render = {(props) => (<Sort {...props} choice="I"/>)}/>
              <Route exact path = "/j" render = {(props) => (<Sort {...props} choice="J"/>)}/>
              <Route exact path = "/k" render = {(props) => (<Sort {...props} choice="K"/>)}/>
              <Route exact path = "/l" render = {(props) => (<Sort {...props} choice="L"/>)}/>
              <Route exact path = "/m" render = {(props) => (<Sort {...props} choice="M"/>)}/>
              <Route exact path = "/n" render = {(props) => (<Sort {...props} choice="N"/>)}/>
              <Route exact path = "/o" render = {(props) => (<Sort {...props} choice="O"/>)}/>
              <Route exact path = "/p" render = {(props) => (<Sort {...props} choice="P"/>)}/>
              <Route exact path = "/q" render = {(props) => (<Sort {...props} choice="Q"/>)}/>
              <Route exact path = "/r" render = {(props) => (<Sort {...props} choice="R"/>)}/>
              <Route exact path = "/s" render = {(props) => (<Sort {...props} choice="S"/>)}/>
              <Route exact path = "/t" render = {(props) => (<Sort {...props} choice="T"/>)}/>
              <Route exact path = "/u" render = {(props) => (<Sort {...props} choice="U"/>)}/>
              <Route exact path = "/v" render = {(props) => (<Sort {...props} choice="V"/>)}/>
              <Route exact path = "/w" render = {(props) => (<Sort {...props} choice="W"/>)}/>
              <Route exact path = "/x" render = {(props) => (<Sort {...props} choice="X"/>)}/>
              <Route exact path = "/y" render = {(props) => (<Sort {...props} choice="Y"/>)}/>
              <Route exact path = "/z" render = {(props) => (<Sort {...props} choice="Z"/>)}/>
            </Switch>
          </ol>


          

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
