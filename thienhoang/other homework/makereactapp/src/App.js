import React, { Component } from 'react';
import './css/App.css';
import FooterCom from './components/footer';
import Form from './components/form';



class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Form />
        </div>  
        <div>
        <FooterCom imgLinkedin={require('./media/image/linkedin-button.svg')} imgGithub={require('./media/image/github-logo.png')} /> 
        </div>
      </div>
    );
  }
}

export default App;
