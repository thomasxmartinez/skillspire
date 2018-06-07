import React, { Component } from 'react';
import './css/App.css';
import FooterCom from './components/footer';
import Form from './components/form';



class App extends Component {
  
  state = {
    fields:{}
  };

  submitButton = fields => {
    this.setState({fields});

  }

  render() {
    return (
      <div>
        <div>
          <Form submitButton={fields => this.submitButton(fields)} />
        </div> 
        <div>
          <p>{JSON.stringify(this.state.fields, null, 2)} </p>
        </div> 
        <div>
        <FooterCom imgLinkedin={require('./media/image/linkedin-button.svg')} imgGithub={require('./media/image/github-logo.png')} /> 
        </div>
      </div>
    );
  }
}

export default App;
