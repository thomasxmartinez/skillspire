import React, { Component } from 'react';
import './css/App.css';
import Navigation from './components/navbar';
import FooterCom from './components/footer';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
          <div>
            <div>
              <About />
            </div>
            <div>
              <Portfolio />
            </div>
            <div>
              <Contact />
            </div>
          </div>
        <FooterCom imgLinkedin={require('./images/linkedin-button.svg')} imgGithub={require('./images/github-logo.png')} /> 
      </div>
    );
  }
}

export default App;
