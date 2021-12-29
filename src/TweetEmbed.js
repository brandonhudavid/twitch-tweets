import React from 'react';

export class TweetEmbed extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tweetId: this.props.tweetId
      }
  }

  componentDidUpdate() {
    if (this.props.displayed) {
      document.querySelector(".twitter-tweet-container").classList.remove("hide-display");
    }
    if (!this.props.displayed) {
      document.querySelector(".twitter-tweet-container").classList.add("hide-display");
  }
}

  render() {
      return (
        <div className="twitter-tweet-container hide-display">
        </div>
      );
  }
}

export default TweetEmbed;
