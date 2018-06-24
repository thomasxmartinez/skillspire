import React, { Component } from 'react';
import './css/App.css';
import Navigation from './components/navbar';
import FooterCom from './components/footer';
import About from './components/about';
import Landing from './components/landing';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
          <div>
          <div>
            <Landing vidSrc={require('./media/video/landing.MP4')} />
            </div>
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
        <FooterCom imgLinkedin={require('./media/image/linkedin-button.svg')} imgGithub={require('./media/image/github-logo.png')} /> 
      </div>
    );
  }
}

export default App;
