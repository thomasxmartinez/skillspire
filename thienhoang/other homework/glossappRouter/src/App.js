import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Button from './components/button';
import ButtonA from './components/buttonA';
import ButtonB from './components/buttonB';
import ButtonC from './components/buttonC';
import ButtonD from './components/buttonD';
import ButtonE from './components/buttonE';
import ButtonF from './components/buttonF';
import ButtonG from './components/buttonG';
import ButtonH from './components/buttonH';
import ButtonI from './components/buttonI';
import ButtonJ from './components/buttonJ';
import ButtonK from './components/buttonK';
import ButtonL from './components/buttonL';
import ButtonM from './components/buttonM';
import ButtonN from './components/buttonN';
import ButtonO from './components/buttonO';
import ButtonP from './components/buttonP';
import ButtonQ from './components/buttonQ';
import ButtonR from './components/buttonR';
import ButtonS from './components/buttonS';
import ButtonT from './components/buttonT';
import ButtonU from './components/buttonU';
import ButtonV from './components/buttonV';
import ButtonW from './components/buttonW';
import ButtonX from './components/buttonX';
import ButtonY from './components/buttonY';
import ButtonZ from './components/buttonZ';
import Error from './components/error';
import Navigation from './components/navigation';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
        <div>
        <Navigation />
        <Switch>
        <Route path="/" component={Button} exact />
        <Route path="/ButtonA" component={ButtonA}  />
        <Route path="/ButtonB" component={ButtonB} />
        <Route path="/ButtonC" component={ButtonC} />
        <Route path="/ButtonD" component={ButtonD} />
        <Route path="/ButtonE" component={ButtonE} />
        <Route path="/ButtonF" component={ButtonF} />
        <Route path="/ButtonG" component={ButtonG} />
        <Route path="/ButtonH" component={ButtonH} />
        <Route path="/ButtonI" component={ButtonI} />
        <Route path="/ButtonJ" component={ButtonJ} />
        <Route path="/ButtonK" component={ButtonK} />
        <Route path="/ButtonL" component={ButtonL} />
        <Route path="/ButtonM" component={ButtonM} />
        <Route path="/ButtonN" component={ButtonN} />
        <Route path="/ButtonO" component={ButtonO} />
        <Route path="/ButtonP" component={ButtonP} />
        <Route path="/ButtonQ" component={ButtonQ} />
        <Route path="/ButtonR" component={ButtonR} />
        <Route path="/ButtonS" component={ButtonS} />
        <Route path="/ButtonT" component={ButtonT} />
        <Route path="/ButtonU" component={ButtonU} />
        <Route path="/ButtonV" component={ButtonV} />
        <Route path="/ButtonW" component={ButtonW} />
        <Route path="/ButtonX" component={ButtonX} />
        <Route path="/ButtonY" component={ButtonY} />
        <Route path="/ButtonZ" component={ButtonZ} />
        <Route  component={Error} />
        </Switch>
        </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
