import React from 'react';
import ludwig from './img/streamers/ludwig.jpg';
import sodapoppin from './img/streamers/sodapoppin.jpg';
import xqc from './img/streamers/xqc.jpg';
import charlie from './img/streamers/charlie.jpg';
import mizkif from './img/streamers/mizkif.jpg';
import pokimane from './img/streamers/pokimane.jpg';
import hasanabi from './img/streamers/hasanabi.jpg';
import sykkuno from './img/streamers/sykkuno.jpg';
import PogChamp from './img/emotes/PogChamp.png';

export class TweetFake extends React.Component {
  constructor(props) {
      super(props);
      switch(this.props.tweetAttr["name"]) {
        case "Mizkif":
            this.state = {icon : mizkif}
            break;
        case "Ludwig":
            this.state = {icon : ludwig}
            break;
        case "Sodapoppin":
            this.state = {icon : sodapoppin}
            break;
        case "xQc":
            this.state = {icon : xqc}
            break;
        case "MoistCr1TiKaL":
            this.state = {icon : charlie}
            break;
        case "Pokimane":
            this.state = {icon : pokimane}
            break;
        case "HasanAbi":
            this.state = {icon : hasanabi}
            break;
        case "Sykkuno":
            this.state = {icon : sykkuno}
            break;
        default:
            this.state = {icon : PogChamp}

      }
  }

  render() {
      return (
        <div className="tweet-card tweet-fake">
            {/* <div className={this.props.visible ? "tweet-whiteout" : "tweet-whiteout"}></div> */}
            <div className="tweet-container">
            <img className="tweet-fake-icon" src={this.state.icon} alt="Twitter icon" />
                <div className="handle-container">
                    <h2>{this.props.tweetAttr["name"]}</h2>
                    <h3>@{this.props.tweetAttr["handle"]}</h3>
                </div>
                <p className="tweet-text">{this.props.tweetAttr["text"]}</p>
                <p className="tweet-datetime">{this.props.tweetAttr["datetime"]}</p>
            </div>
        </div>
      );
  }
}

export default TweetFake;
