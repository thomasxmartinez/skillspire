import React, { Component } from 'react';
import './App.css';
import Card from './Card/card.jsx';
import DrawButton from './DrawButton/drawButton.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [
        {id: 1, eng: "English", han: "Hanzi", pin: "Pinyin"},
        {id: 2, eng: "English2", han: "Hanzi2", pin: "Pinyin2"},
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })

  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }


  render() {
    return (
      <div className="App">
        <div>
          <Card eng={this.state.currentCard.eng} 
          han={this.state.currentCard.han} 
          pin={this.state.currentCard.pin}
          />
        </div>
          <div className="buttonRow">
            <DrawButton />
          </div>
        
      </div>
    );
  }
}

export default App;
