import React from 'react';
import './App.css';
import Landing from "./Landing";
import CtaPrimary from "./CtaPrimary"
import TweetHidden from './TweetHidden';
import MultipleChoice from './MultipleChoice';

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: "landing",
        score: 0,
      }
  }

  startGame() {
    this.setState({
      currentPage: "game",
      score: 0
    });
  }

  renderPage() {
    switch (this.state.currentPage) {
      case "landing":
        return (
          <div>
            <Landing />
            <CtaPrimary id="cta-start" text="Start" onClick={() => this.startGame()}/>
          </div>
      );
      case "game":
        return (
          <div>
            <h2 id="game-prompt">Who made this tweet?</h2>
            <TweetHidden text="ludwig beat me in mario... im such a pussy" />
            <MultipleChoice choice1="Emiru" choice2="HasanAbi" choice3="Mizkif" choice4="Sykkuno" />
          </div>
      );
      default:
        return;
    }
  }

  render() {
    return (
      <div id="container">
        {this.renderPage()}
      </div>
    )}
}

export default App;
