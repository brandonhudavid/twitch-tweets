import React from 'react';

export class TweetEmbed extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidUpdate() {
    if (this.props.displayed && !document.querySelector(".twitter-tweet-container").classList.contains("show-tweet")) {
      document.querySelector(".twitter-tweet-container").classList.add("show-tweet");
    } else if (!this.props.displayed && document.querySelector(".twitter-tweet-container").classList.contains("show-tweet")) {
      document.querySelector(".twitter-tweet-container").classList.remove("show-tweet");
    }
  }

  render() {
      return (
        <div className="twitter-tweet-container"></div>
      );
  }
}

export default TweetEmbed;
