import React, { Component } from 'react';
import './css/App.css';
import FooterCom from './components/footer';
import Form from './components/form';



class App extends Component {

  submitButton = fields => {
console.log('app component got : ', fields);
  }

  render() {
    return (
      <div>
        <div>
          <Form submitButton={fields => this.submitButton(fields)} />
        </div>  
        <div>
        <FooterCom imgLinkedin={require('./media/image/linkedin-button.svg')} imgGithub={require('./media/image/github-logo.png')} /> 
        </div>
      </div>
    );
  }
}

export default App;
