import React from 'react';

export class TweetEmbed extends React.Component {
  constructor(props) {
      super(props);
  }

componentWillLeave() {
  document.querySelector(".twitter-tweet-container").classList.add("hide-visibility");
}

  render() {
      return (
        <div className="twitter-tweet-container"></div>
      );
  }
}

export default TweetEmbed;
