import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// LAYOUT
import Landing from "./layout/Landing";
import Select from "./layout/Select";
import GameOver from "./layout/GameOver";
import EmotesLayer from './layout/EmotesLayer';
import StreamersLayer from './layout/StreamersLayer';
import Footer from './layout/Footer';
// COMPONENTS
import CtaPrimary from './components/CtaPrimary';
import Prompt from "./components/Prompt";
import MultipleChoice from './components/MultipleChoice';
import TweetHidden from './components/TweetHidden';
import TweetEmbed from './components/TweetEmbed';
import Stats from './components/Stats';
// IMAGES
import logo from './img/twitchtweets_logo.png';
import TwitterLogo from './img/twitter_logo.png';
// REACT-REVEAL
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
// DATA
import { LSF_TweetsBank, OTK_TweetsBank, OTV_TweetsBank } from './data/TweetsBank';
import { LSF_ChoicesBank, OTK_ChoicesBank, OTV_ChoicesBank } from './data/ChoicesBank';
// import db from './data/Firebase';
// import { doc, increment, setDoc } from "firebase/firestore"; 
// UTILS
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TwitterShareButton } from "react-share";
import cloneDeep from 'lodash/cloneDeep';
import _ from 'lodash';

export class App extends React.Component {
  constructor(props) {
      super(props);

      this.default = "lsf";

      this.state = {
        currentPage: "landing",
        selection: localStorage.getItem("selection") || this.default,
        guessed: false,
        correct: false,
        score: 0,
        prevHighScore: 0,
        currHighScore: 0,
        endState: "default",
        tweetId: null,
        showStats: false
      }

      // Streamers
      this.choices = null;
      this.currentChoices = []
      this.tweetsBank = null;
      this.tweetAttr = null;
      this.answer = null;

      // Check for mobile
      window.mobileCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
      };
      this.isMobile = window.mobileCheck()
  }

  goToLanding() {
    this.setState({
      currentPage: "landing"
    })
  }

  endPrevStartNewGame() {
    localStorage.setItem("inGame", "0")
    this.renderBanks();
    this.updatePrime();
    this.goToSelect();
  }

  goToSelect() {
    this.setState({
      currentPage: "select",
      selection: this.default
    })
  }
  
  changeSelection(selected) {
    this.setState({
      selection: selected
    })
    document.querySelectorAll("#selection-container .streamlink").forEach((el) => { 
      if (el.querySelector("img").getAttribute("alt") == selected) {
        el.querySelector("img").classList.add("selected")
        el.querySelector(".streamtext").classList.add("selected")
      }
      else {
        el.querySelector("img").classList.remove("selected")
        el.querySelector(".streamtext").classList.remove("selected")
      }
    })
  }

  renderBanks() {
    switch (this.state.selection) {
      case "otk":
        this.choices = OTK_ChoicesBank;
        this.tweetsBank = OTK_TweetsBank;
        break;
      case "otv":
        this.choices = OTV_ChoicesBank;
        this.tweetsBank = OTV_TweetsBank;
        break;
      case "lsf":
        this.choices = LSF_ChoicesBank;
        this.tweetsBank = LSF_TweetsBank;
        break;
      default:
        this.choices = LSF_ChoicesBank;
        this.tweetsBank = LSF_TweetsBank;
        break;
    }
  }

  renderSelection() {
    this.setState({
      prevHighScore: localStorage.getItem(this.state.selection + "_highScore"),
      currHighScore: localStorage.getItem("inGame") == "1" ? parseInt(localStorage.getItem("currScore"),10) : 0,
    })
    this.renderBanks();
  }
  
  startGame() { 
    this.renderSelection();
    this.localStorageStartGame();
    this.removeGifBg();
    this.getTweet();
    this.getChoices(this.tweetAttr);
    this.setState({
      currentPage: "game",
      guessed: false,
      score: localStorage.getItem("inGame") == "1" ? parseInt(localStorage.getItem("currScore"),10) : 0,
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
    if (this.answer && this.answer !== null) document.querySelector("html").classList.add(this.answer.split(" ")[0]);
  }

  removeGifBg() {
    document.querySelector("html").className = "";
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
      return ["... Really? 0?","Run that back."]
    }
    if (this.state.currHighScore > this.state.prevHighScore) {
      return ["New high score! Pog Pog PogU","Run it back?"]
    }
    if (this.state.score >= 10) {
      return ["Congrats, you're a parasocial Andy!","Go agane?"]
    }
    if (this.state.score >= 7) {
      return ["Wow, you're a diehard Twitch frog!","Run it back?"]
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
    let primeStr = this.state.selection + "_prime"
    let primeCountStr = this.state.selection + "_primeCount"
    var prime = localStorage.getItem(primeStr)
    var primeCount = localStorage.getItem(primeCountStr)
    if (!prime || !primeCount) {
      this.updatePrime();
      prime = localStorage.getItem(primeStr)
      primeCount = localStorage.getItem(primeCountStr)
    }
    var tweetId = Object.keys(this.tweetsBank)[(parseInt(prime,10) * parseInt(primeCount,10)) % Object.keys(this.tweetsBank).length];
    this.tweetAttr = this.tweetsBank[tweetId];
    this.setState({
      tweetId: tweetId
    })
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

  // Function to return gcd of a and b
  gcd(a, b) {
    // Base Case
    if (a == 0) return b;
    // Recursive GCD
    return this.gcd(b % a, a);
  }

  getPrime() {
    let len = Object.keys(this.tweetsBank).length
    let primeArr = []
    for (var i=this.choices.length; i < len; i++) {
      if (this.gcd(i, len) == 1) primeArr.push(i)
    }
    let ret = primeArr[this.getRandomInt(primeArr.length)]
    return ret
  }

  updatePrime() {
    let primeStr = this.state.selection + "_prime"
    let primeCountStr = this.state.selection + "_primeCount"
    let prime = localStorage.getItem(primeStr)
    let primeCount = localStorage.getItem(primeCountStr)
    if (parseInt(primeCount,10) >= Object.keys(this.tweetsBank).length) {
      ReactDOM.render(
        <Fade bottom>
          <div id="alert-reload">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.879 122.879" enableBackground="new 0 0 122.879 122.879">
            <g><path fillRule="evenodd" clipRule="evenodd" fill="#FF4141" d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"/></g>
          </svg>
            Congrats, you went through all {Object.keys(this.tweetsBank).length} tweets! You will now be seeing reused tweets.
          </div>
        </Fade>
      , document.querySelector("#alert-container"));
      document.querySelector("#alert-container svg").addEventListener('click', () => {
        document.querySelector("#alert-reload").parentNode.removeChild(document.querySelector("#alert-reload"));
      })
    }
    if (!prime || parseInt(primeCount,10) >= Object.keys(this.tweetsBank).length) {
        localStorage.setItem(primeStr, this.getPrime())
    }
    if (!primeCount || parseInt(primeCount,10) >= Object.keys(this.tweetsBank).length) {
      localStorage.setItem(primeCountStr, 1)
    } else {
      localStorage.setItem(primeCountStr, parseInt(primeCount, 10) + 1)
    }
  }

  localStorageStartGame() {
    if (localStorage.getItem("inGame") != "1") {
      localStorage.setItem("inGame", 1)
      localStorage.setItem("currScore", 0)
    }
    localStorage.setItem("selection", this.state.selection)
  }

  localStorageMidGame() {
    let currScore = localStorage.getItem("currScore")
    if (!currScore) {
      localStorage.setItem("currScore", 1)
    } else {
      localStorage.setItem("currScore", parseInt(currScore, 10) + 1)
    }
    this.updatePrime();
  }

  localStorageEndGame() {
    // end game
    localStorage.setItem("inGame", 0)
    this.updatePrime();
    // highScore
    let storedHighScore = localStorage.getItem(this.state.selection + "_highScore");
    if (!storedHighScore || storedHighScore < this.state.currHighScore) {
      localStorage.setItem(this.state.selection + "_highScore", this.state.currHighScore);
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

  // async addAnswerToFirebase(selected) {
  //   // Add answer to Firebase
  //   try {
  //     await setDoc(doc(db, "tweetIds", this.state.tweetId), {
  //       [selected]: increment(1)
  //     }, {merge: true});
  //   } catch (e) {
  //     console.error("Error adding answer to firebase: ", e);
  //   }
  // }

  // async addScoreToFirebase() {
  //   // Add score to Firebase
  //   try {
  //     await setDoc(doc(db, "score", this.state.score.toString()), {
  //       count: increment(1)
  //     }, {merge: true});
  //   } catch (e) {
  //     console.error("Error adding score to firebase: ", e);
  //   }
  // }

  checkAnswer(selected, answer) {
    // this.addAnswerToFirebase(selected)
    if (selected == answer) {
      // Correct answer
      this.localStorageMidGame();
      this.setState(prevState => ({
        score: prevState.score + 1,
        currHighScore: Math.max(prevState.score + 1, prevState.prevHighScore),
        correct: true,
      }))
    } else {
      // Wrong answer
      // this.addScoreToFirebase();
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
        this.removeGifBg();
        return (
          <div>
            <Bounce delay={200} duration={1250}>
              <img id="logo" src={logo} alt="Logo" />
            </Bounce>
            <Flip top delay={600}>
              <Landing />
            </Flip>
            <Fade bottom delay={600} duration={500}>
              <CtaPrimary text={localStorage.getItem("inGame") == "1" ? "Continue" : "Start"} onClick={() => localStorage.getItem("inGame") == "1" ? this.startGame() : this.goToSelect()}/>
              {localStorage.getItem("inGame") == "1" ? <CtaPrimary text="New game" onClick={() => this.endPrevStartNewGame()}/> : <div></div>}
            </Fade>
            <Footer />
          </div>
      );
      case "select":
        return (
          <div>
            <Bounce>
            <img id="logo" src={logo} alt="Logo" />
            </Bounce>
            <Flip top>
                <Select onClick={(el) => this.changeSelection(el)} />
                <CtaPrimary text="Start" onClick={() => this.startGame()}/>
            </Flip>
            <StreamersLayer selection={this.state.selection} />
            <Footer />
          </div>
        )
      case "game":
        return (
          <div>
            <Bounce>
              <img id="mini-logo" src={logo} alt="Mini logo" onClick={() => this.goToLanding()} />
            </Bounce>
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
            <Footer />
          </div>
      );
      case "gameOver":
        return (
          <div>
            <Bounce>
            <img id="mini-logo" src={logo} alt="Mini logo" onClick={() => this.goToLanding()} />
            </Bounce>
            <span id="high-score">High score: {Math.max(this.state.currHighScore, this.state.prevHighScore)}</span>
            <span id="stats-prompt" onClick={() => this.showStats()}>{this.state.showStats ? "Hide" : "Click for"} additional stats</span>
            <Slide left when={this.state.showStats} duration={500}>
              <Stats />
            </Slide>
            <div className="gameOver">
              <Slide right>
                <GameOver score={this.state.score} flavorText={this.state.flavorText} />
                <CtaPrimary text="Play again" onClick={() => this.startGame()}/>
                <TwitterShareButton
                      url='https://twitchtweets.com/'
                      title={"Wow! I scored " + this.state.score + " in Twitch Tweets! How well do you know these Twitch streamers?"}
                      hashtags={["TwitchTweets"]}>
                        <div className="twitter-btn"><img className="twitter-logo" src={TwitterLogo} alt="Twitter logo"/>Share score</div>
                </TwitterShareButton>
              </Slide>
            </div>
            <Footer />
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
