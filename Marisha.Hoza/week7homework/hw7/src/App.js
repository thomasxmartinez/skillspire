import React, { Component } from 'react';
import './App.css';
import Welcome from './welcome.js';
import FindMe from './FollowMe.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="friend!"/>
        </header>
        
        <FindMe/>
      </div>


    );
  }
}
 
export default App;
