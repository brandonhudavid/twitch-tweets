import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import logo from './img/twitchtweets_logo.png';
import Landing from "./Landing";
import GameOver from "./GameOver";
import CtaPrimary from "./CtaPrimary";
import Prompt from "./Prompt";
import TweetHidden from './TweetHidden';
import MultipleChoice from './MultipleChoice';
import TweetEmbed from './TweetEmbed';
import TweetsBank from './TweetsBank';
import EmotesLayer from './EmotesLayer';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { TwitterTweetEmbed } from 'react-twitter-embed';

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: "landing",
        guessed: false,
        correct: false,
        score: 0,
        prevHighScore: 0,
        currHighScore: 0,
        tweetId: null
      }
      this.choices = [
        "Mizkif",
        "HasanAbi",
        "Sykkuno",
        "Ludwig",
        "Pokimane",
        "xQc",
        "Sodapoppin",
        "MoistCr1TiKaL"
      ]
      this.currentChoices = []
      this.tweetsBank = TweetsBank;
      this.tweetAttr = null;
      this.answer = null;
  }
  
  startGame() {
    this.removeGifBg()
    this.getTweet();
    this.getChoices(this.tweetAttr["name"]);
    this.setState({
      currentPage: "game",
      guessed: false,
      score: 0,
    });
  }

  startNextRound() {
    var choiceElems = document.querySelectorAll(".choice");
    choiceElems.forEach((el) => {
      el.classList.remove("disabled");
      el.classList.remove("choice-correct");
      el.classList.remove("choice-wrong");
      el.classList.add("choice-default");
    })
    this.getTweet();
    this.getChoices(this.tweetAttr["name"]);
    this.setState({
      guessed: false,
      correct: false,
    });
  }

  addGifBg() {
    document.querySelector("html").classList.add(this.answer);
  }

  removeGifBg() {
    document.querySelector("html").classList.remove(this.answer);
  }

  endGame() {
    this.addGifBg()
    this.setState(prevState => ({
      currentPage: "gameOver",
      prevHighScore: Math.max(prevState.currHighScore, prevState.prevHighScore)
    }))
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getTweet() {
    let prevTweet = document.querySelector(".twitter-tweet-container");
    if (prevTweet) {
      ReactDOM.unmountComponentAtNode(prevTweet);
    }
    var bankKeys = Object.keys(this.tweetsBank);
    var tweetId = bankKeys[this.getRandomInt(bankKeys.length)];
    this.tweetAttr = this.tweetsBank[tweetId];
    this.setState({
      tweetId: tweetId
    }, () => {
      ReactDOM.render(<TwitterTweetEmbed tweetId={this.state.tweetId} options={{"align": "center", "cards":"hidden"}}/>, document.querySelector(".twitter-tweet-container"))
    })
    delete this.tweetsBank[tweetId];
  }

  getChoices(answer) {
      var fourChoices = []
      var choicesClone = this.choices.slice();
      choicesClone.splice(choicesClone.indexOf(answer), 1);
      var answerIndex = this.getRandomInt(4);
      while (fourChoices.length < 4) {
        if (fourChoices.length == answerIndex) {
          fourChoices.push(answer)
        } else {
          var spliced = choicesClone.splice(this.getRandomInt(choicesClone.length), 1)
          fourChoices.push(spliced[0]);
        }
      }
      this.currentChoices = fourChoices;
  }

  checkAnswer(selected, answer) {
    if (selected == answer) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        currHighScore: Math.max(prevState.score + 1, prevState.prevHighScore),
        correct: true,
      }))
      document.querySelector("#game-prompt").addEventListener("click", () => {
        this.startNextRound();
      }, {once: true})
    } else {
      this.answer = answer;
    }
    var choiceElems = document.querySelectorAll(".choice");
    choiceElems.forEach((el) => {
      el.classList.add("disabled");
      if (el.innerHTML == answer) {
        el.classList.add("choice-correct");
        el.classList.remove("choice-default");
      }
      else if (el.innerHTML == selected && selected != answer) {
        el.classList.add("choice-wrong");
        el.classList.remove("choice-default");
      }
    })
    this.replaceHiddenTweet()
  }
  

  replaceHiddenTweet() {
    this.setState({
      guessed: true
    })
  }

  renderPage() {
    switch (this.state.currentPage) {
      case "landing":
        return (
          <div>
            <Zoom left opposite>
              <img id="logo" src={logo} alt="Logo" />
            </Zoom>
            <Flip left delay={600}>
              <Landing />
            </Flip>
            <Fade bottom delay={600} duration={500}>
              <CtaPrimary text="Start" onClick={() => this.startGame()}/>
            </Fade>
          </div>
      );
      case "game":
        return (
          <div>
          <span id="high-score">High score: {this.state.currHighScore}</span>
          <Slide right>
              <Prompt guessed={this.state.guessed} correct={this.state.correct} />
          </Slide>
              <div id="tweet-placeholder">
                  <Rotate top left when={this.state.guessed} duration={750} style={{background: "none !important"}}>
                    <TweetEmbed displayed={this.state.guessed} />
                  </Rotate>
              <Slide right when={!this.state.guessed} appear={true}>
              <TweetHidden text={this.tweetAttr["text"]} datetime={this.tweetAttr["datetime"]} displayed={!this.state.guessed} />
              </Slide>
              </div>
              <Slide right>
              <MultipleChoice choices={this.currentChoices} onClick={(selected) => this.checkAnswer(selected, this.tweetAttr["name"])} guessed={this.state.guessed} nextArrow={() => this.state.correct ? this.startNextRound() : this.endGame()}/>
              </Slide>
          <span id="score">Score: {this.state.score}</span>
          </div>
      );
      case "gameOver":
        return (
          <div>
            <span id="high-score">High score: {this.state.currHighScore}</span>
            <Slide right>
            <GameOver score={this.state.score} />
            <CtaPrimary text="Play again" onClick={() => this.startGame()}/>
          </Slide>
          </div>
        );
      default:
        return;
    }
  }

  render() {
    return (
      <div id="container">
        <EmotesLayer currentPage={this.state.currentPage} guessed={this.state.guessed} correct={this.state.correct} />
        {this.renderPage()}
      </div>
    )}
}

export default App;
