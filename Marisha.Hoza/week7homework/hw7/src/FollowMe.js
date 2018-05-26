import React from 'react';
import styled from 'styled-components';
import background from './background.jpg'



// ------------------------------------

class FindMe extends React.Component{
  constructor() {
    super();

    this.state = {
      isVisible: false
    }
  }

  foundMe() {
    this.setState({isVisible: true});
    console.log("hello");
    console.log("isVisible = " + this.state.isVisible);
  };

  randomLocation() {
    return Math.floor(Math.random() * 100)
  };

  catX = this.randomLocation();
  catY = this.randomLocation();

  Wrapper = styled.div `
      position: absolute;
      width: 100vw;
      height: 100vh;
      background-image: url(${background});
      background-repeat: no-repeat;
      background-size: 100vw 100vh;
    `

 

  render() {

    let seeMe = this.state.isVisible ? "1" : "0"
 

    let Cat = styled.div `
      left: ${this.catX + "%"};
      top: ${this.catY + "%"};

      opacity: ${props => props.isVisible ? "1" : "0"};
    `

    return (
      <this.Wrapper>
        < p className = "App-intro" >
          Use your mouse to find the hidden cat!
        </p>
        <h3>Cat coordinates: X={this.catX} Y={this.catY}</h3>
        < Cat id = "cat" style={{opacity: seeMe}} onMouseOver={this.foundMe.bind(this)}> </Cat>
      </this.Wrapper>
    )
  }
};


export default FindMe;

