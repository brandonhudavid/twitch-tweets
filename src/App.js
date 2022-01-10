import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Bounce from 'react-reveal/Bounce';
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
import Stats from './Stats';
import cloneDeep from 'lodash/cloneDeep';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TwitterShareButton } from "react-share";

export class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPage: "landing",
        guessed: false,
        correct: false,
        score: 0,
        prevHighScore: localStorage.getItem("highScore") || 0,
        currHighScore: 0,
        endState: "default",
        tweetId: null,
        showStats: false
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

      // Check for mobile
      window.mobileCheck = function() {
        console.log("check for mobile")
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
      };
      this.isMobile = window.mobileCheck()
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
      try {
        // Render Twitter embed after state change
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
    if (localStorage.getItem("gamesPlayed") == "1") {
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
            You will now be seeing reused tweets. If chat sees this VI VON ZULUL
          </div>
        </Fade>
      , document.querySelector("#alert-container"));
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

  localStorageEndGame() {
    // highScore
    let storedHighScore = localStorage.getItem("highScore");
    if (!storedHighScore || storedHighScore < this.state.currHighScore) {
      localStorage.setItem("highScore", this.state.currHighScore);
    }
    // gamesPlayed
    let storedGamesPlayed = localStorage.getItem("gamesPlayed");
    if (!storedGamesPlayed) {
      localStorage.setItem("gamesPlayed", 1);
    } else {
      localStorage.setItem("gamesPlayed", parseInt(storedGamesPlayed, 10) + 1);
    }
    // tweetsSeen
    let storedTweetsSeen = localStorage.getItem("tweetsSeen");
    if (!storedTweetsSeen) {
      localStorage.setItem("tweetsSeen", this.state.score + 1)
    } else {
      localStorage.setItem("tweetsSeen", parseInt(storedTweetsSeen, 10) + this.state.score + 1)
    }
    // tweetsCorrect
    let storedtweetsCorrect = localStorage.getItem("tweetsCorrect");
    if (!storedtweetsCorrect) {
      localStorage.setItem("tweetsCorrect", this.state.score)
    } else {
      localStorage.setItem("tweetsCorrect", parseInt(storedtweetsCorrect, 10) + this.state.score)
    }
    // currentDrought
    let storedCurrentDrought = localStorage.getItem("currentDrought");
    if (!storedCurrentDrought) {
      if (this.state.score == 0) {
        localStorage.setItem("currentDrought", 1)
      } else {
        localStorage.setItem("currentDrought", 0)  
      }
    } else {
      if (this.state.score == 0) {
        localStorage.setItem("currentDrought", parseInt(storedCurrentDrought) + 1);
      } else {
        localStorage.setItem("currentDrought", 0);
      }
    }
    // longestDrought
    let storedLongestDrought = localStorage.getItem("longestDrought");
    if (!storedLongestDrought) {
      localStorage.setItem("longestDrought", 0)
    }
    localStorage.setItem("longestDrought", Math.max(storedLongestDrought, localStorage.getItem("currentDrought")))
  }

  checkAnswer(selected, answer) {
    if (selected == answer) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        currHighScore: Math.max(prevState.score + 1, prevState.prevHighScore),
        correct: true,
      }))
    } else {
      this.answer = answer;
      this.localStorageEndGame();
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

  showStats() {
    this.setState((prevState) => ({ showStats: !prevState.showStats }))
  }

  renderPage() {
    switch (this.state.currentPage) {
      case "landing":
        return (
          <div>
            <Bounce delay={200} duration={1250}>
              <img id="logo" src={logo} alt="Logo" />
            </Bounce>
            <Flip top delay={600}>
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
                  <Rotate top left when={this.state.guessed} duration={this.isMobile ? 0 : 750} style={{background: "none !important"}}>
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
            <span id="stats-prompt" onClick={() => this.showStats()}>{this.state.showStats ? "Hide" : "Click for"} additional stats</span>
            <Slide left when={this.state.showStats} duration={500}>
              <Stats />
            </Slide>
            <Slide right>
            <GameOver score={this.state.score} flavorText={this.state.flavorText} />
            <CtaPrimary text="Play again" onClick={() => this.startGame()}/>
            <TwitterShareButton
									url='https://twitchtweets.com/'
									title={"Wow! I scored " + this.state.score + " in Twitch Tweets! How well do you know these Twitch streamers?"}
									hashtags={["TwitchTweets"]}>
                    <div className="twitter-btn"><img className="twitter-logo" src={TwitterLogo} alt="Twitter logo"/>Share score</div>
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
        <div id="version">v{process.env.REACT_APP_VERSION}</div>
        <div id="alert-container"></div>
        {this.renderPage()}
        <EmotesLayer currentPage={this.state.currentPage} guessed={this.state.guessed} correct={this.state.correct} />
      </div>
    )}
}

export default App;
