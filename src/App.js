import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import logo from './img/twitchtweets_logo.png';
import TwitterLogo from './img/twitter_logo.png';
import Landing from "./Landing";
import GameOver from "./GameOver";
import CtaPrimary from "./CtaPrimary";
import Prompt from "./Prompt";
import TweetHidden from './TweetHidden';
import MultipleChoice from './MultipleChoice';
import TweetEmbed from './TweetEmbed';
import TweetsBank from './TweetsBank';
import EmotesLayer from './EmotesLayer';
import StreamersLayer from './StreamersLayer';
import cloneDeep from 'lodash/cloneDeep';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TwitterShareButton, TwitterIcon } from "react-share";

export class App extends React.Component {
  constructor(props) {
      super(props);
      // Local storage for high score and first game
      if (!localStorage.getItem("highScore")) {
        localStorage.setItem("highScore", 0)
      }
      if (!localStorage.getItem("firstGame")) {
        localStorage.setItem("firstGame", "true")
      }
      this.state = {
        currentPage: "landing",
        guessed: false,
        correct: false,
        score: 0,
        prevHighScore: localStorage.getItem("highScore") || 0,
        currHighScore: 0,
        endState: "default",
        tweetId: null
      }
      // Streamers
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
      this.tweetsBank = cloneDeep(TweetsBank);
      this.tweetAttr = null;
      this.answer = null;
  }
  
  startGame() {
    this.removeGifBg()
    this.getTweet();
    this.getChoices(this.tweetAttr);
    this.setState({
      currentPage: "game",
      guessed: false,
      score: 0,
    }, () => {
      // Render Twitter embed after state change
      try {
        ReactDOM.render(<TwitterTweetEmbed tweetId={this.state.tweetId} options={{"align": "center", "cards":"hidden"}}/>, document.querySelector(".twitter-tweet-container"))
      } catch (e) {
        console.log("Failed to render embedded tweet:", e)
      }
  });
  }

  startNextRound() {
    // Make all choices default again
    var choiceElems = document.querySelectorAll(".choice");
    choiceElems.forEach((el) => {
      el.classList.remove("disabled");
      el.classList.remove("choice-correct");
      el.classList.remove("choice-wrong");
      el.classList.add("choice-default");
    })
    this.getTweet();
    this.getChoices(this.tweetAttr);
    this.setState({
      guessed: false,
      correct: false,
    }, () => {
      try {
        // Render Twitter embed after state change
        ReactDOM.render(<TwitterTweetEmbed tweetId={this.state.tweetId} options={{"align": "center", "cards":"hidden"}}/>, document.querySelector(".twitter-tweet-container"))
      } catch (e) {
        console.log("Failed to render embedded tweet:", e)
      }
  });
  }

  addGifBg() {
    // For end of game
    document.querySelector("html").classList.add(this.answer);
  }

  removeGifBg() {
    document.querySelector("html").classList.remove(this.answer);
  }

  endGameFlavorText() {
    if (localStorage.getItem("firstGame") == "true") {
      localStorage.setItem("firstGame", "false")
      if (this.state.score > 2) {
        return ["Hey, not bad for your first go...","Run it back?"]
      } else {
        return ["... Well, it was your first go.", "Let's try that again."]
      }
    }
    if (this.state.score == 0) {
      return ["... Really düd? 0?","Run that back."]
    }
    if (this.state.currHighScore > this.state.prevHighScore) {
      return ["New high score! Pog Pog PogU","Run it back?"]
    }
    if (this.state.score >= 10) {
      return ["Congrats, you're a parasocial Andy!","Go agane?"]
    }
    if (this.state.score >= 7) {
      return ["Wow, you're a diehard LSF frog!","Run it back?"]
    }
    if (this.state.score >= 4) {
      return ["Not bad... but not great.","Can you do better?"]
    }
    return ["You can do better than that.","Go again."];
  }

  endGame() {
    this.addGifBg()
    this.setState(prevState => ({
      currentPage: "gameOver",
      prevHighScore: Math.max(prevState.currHighScore, prevState.prevHighScore),
      flavorText: this.endGameFlavorText()
    }))
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  getTweet() {
    // Unmount previous embedded tweet component
    let prevTweet = document.querySelector(".twitter-tweet-container");
    if (prevTweet) {
      ReactDOM.unmountComponentAtNode(prevTweet);
    }
    // If TweetBank has no more tweets
    if (Object.keys(this.tweetsBank).length <= 0) {
      this.tweetsBank = cloneDeep(TweetsBank);
      ReactDOM.render(
        <Fade bottom>
          <div id="alert-reload">
            You will start seeing reused tweets.
          </div>
        </Fade>
      , document.querySelector("#alert-container"));
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(document.querySelector("#alert-container"));
      }, 5000)
    }
    var bankKeys = Object.keys(this.tweetsBank);
    var tweetId = bankKeys[this.getRandomInt(bankKeys.length)];
    this.tweetAttr = this.tweetsBank[tweetId];
    this.setState({
      tweetId: tweetId
    })
    delete this.tweetsBank[tweetId];
  }

  getChoices(tweetAttr) {
    // Select 4 names for the multiple choice
      var fourChoices = [];
      var choicesClone = this.choices.slice();
      // Remove answer and bait from pool of choices
      choicesClone.splice(choicesClone.indexOf(tweetAttr["name"]), 1);
      if ("bait" in tweetAttr) {
        choicesClone.splice(choicesClone.indexOf(tweetAttr["bait"]), 1);
      }
      var answerIndex = this.getRandomInt(4);
      var baitIndex = -1;
      if ("bait" in tweetAttr) {
        while (baitIndex < 0 || baitIndex == answerIndex) {
          baitIndex = this.getRandomInt(4);
        }
      }
      while (fourChoices.length < 4) {
        if (fourChoices.length == answerIndex) {
          fourChoices.push(tweetAttr["name"])
        } else if (fourChoices.length == baitIndex) {
          fourChoices.push(tweetAttr["bait"])
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
      // Set high score to local storage
      if (!localStorage.getItem("highScore") || localStorage.getItem("highScore") < this.state.currHighScore) {
        localStorage.setItem("highScore", this.state.currHighScore);
      }
    }
    // Reveal correct/wrong choices
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
            <StreamersLayer />
          </div>
      );
      case "game":
        return (
          <div>
          <span id="high-score">High score: {Math.max(this.state.currHighScore, this.state.prevHighScore)}</span>
          <span id="score-mobile">Score: {this.state.score}</span>
          <div id="game">
            <Slide right>
                <Prompt guessed={this.state.guessed} correct={this.state.correct} />
            </Slide>
              <div id="tweet-placeholder">
                <div>
                  <Rotate top left when={this.state.guessed} duration={750} style={{background: "none !important"}}>
                    <TweetEmbed displayed={this.state.guessed} />
                  </Rotate>
                <Slide right when={!this.state.guessed} collapse appear={true}>
                  <TweetHidden text={this.tweetAttr["text"]} datetime={this.tweetAttr["datetime"]} displayed={!this.state.guessed} />
                </Slide>
              </div>
              </div>
              <Slide right>
              <MultipleChoice choices={this.currentChoices} onClick={(selected) => this.checkAnswer(selected, this.tweetAttr["name"])} guessed={this.state.guessed} nextArrow={() => this.state.correct ? this.startNextRound() : this.endGame()}/>
              </Slide>
            </div>
          <span id="score">Score: {this.state.score}</span>
          </div>
      );
      case "gameOver":
        return (
          <div>
            <span id="high-score">High score: {Math.max(this.state.currHighScore, this.state.prevHighScore)}</span>
            <Slide right>
            <GameOver score={this.state.score} flavorText={this.state.flavorText} />
            <CtaPrimary text="Play again" onClick={() => this.startGame()}/>
            <TwitterShareButton
									url='https://brandonhudavid.com/twitch-tweets-prod/'
									title={"I scored " + this.state.score + " in Twitch Tweets! How well do you know these Twitch streamers?"}
									hashtags={["TwitchTweets"]}>
                    <div className="twitter-btn"><img className="twitter-logo" src={TwitterLogo} alt="Twitter logo"/>Tweet</div>
            </TwitterShareButton>
            <h3 className="developer">developed by <a className="dev-link" href="https://twitter.com/bdiddydavid" target="_blank">@bdiddydavid</a></h3>
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
        <div id="alert-container"></div>
        {this.renderPage()}
        <EmotesLayer currentPage={this.state.currentPage} guessed={this.state.guessed} correct={this.state.correct} />
      </div>
    )}
}

export default App;
