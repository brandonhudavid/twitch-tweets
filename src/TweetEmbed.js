import React from 'react';

export class TweetEmbed extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidUpdate() {
    if (this.props.displayed && document.querySelector(".twitter-tweet-container").classList.contains("disabled")) {
      document.querySelector(".twitter-tweet-container").classList.remove("disabled");
    }
  }

  render() {
      return (
        <div className="twitter-tweet-container disabled"></div>
      );
  }
}

export default TweetEmbed;
